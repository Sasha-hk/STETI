from ckeditor.fields import RichTextField
from django.db import models
from django.utils.text import slugify
from django.conf import settings



class About(models.Model):
    class Meta:
        verbose_name_plural = "Про нас"

    first_paragraph = RichTextField('Перший абзац')
    img = models.ImageField('Фото', upload_to='about/about_us/', blank=True)
    second_paragraph = RichTextField('Другий абзац', blank=True)
    third_paragraph = RichTextField('Третій абзац', blank=True)
    about_departments = RichTextField('Про кафедри', blank=True)

    def __str__(self):
        return 'Про нас'


class Administration(models.Model):
    class Meta:
        verbose_name_plural = "Адміністрація"

    FL = models.CharField('ПІБ', max_length=200)
    view = models.ImageField('Фото', upload_to='about_us/faces', blank=True)
    positon = models.CharField('Звання', max_length=100)
    description = RichTextField('Кородкий опис')
    phone_number = models.CharField('Номере телефону', max_length=30)
    slug = models.SlugField(max_length=settings.SLUG_LENGTH, default='', blank=True, editable=False) 


    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.FL)

        super().save(*args, **kwargs)

    def __str__(self):
        return self.FL


class ContactsPhoneNumber(models.Model):
    class Meta:
        verbose_name_plural = "Контактні номери"

    name = models.CharField('Назва відділення', max_length=100)
    phone_number = models.CharField('Номере телефону', max_length=30)

    def __str__(self):
        return self.name


class Gallery(models.Model):
    class Meta:
        verbose_name_plural = "Фото галереї"

    name = models.CharField('Назва фото', max_length=100) 
    image = models.ImageField('Фото', upload_to='about/gallery')

    def __str__(self):
        return str(self.name)


class GalleryCategory(models.Model):
    class Meta:
        verbose_name_plural = "Каегорії галереї"

    category_name = models.CharField("Ім'я категорії", max_length=100)
    image = models.ImageField(verbose_name='Фото категоріії', upload_to="about/gallery/galery-category-img/")
    images = models.ManyToManyField(Gallery, verbose_name='Більше фото', blank=True)
    pub_date = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(max_length=settings.SLUG_LENGTH, default='', blank=True, editable=False) 


    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.category_name)

        super().save(*args, **kwargs)

    def __str__(self):
        return str(self.category_name)
