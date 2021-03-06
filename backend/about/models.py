from ckeditor.fields import RichTextField

from django.conf import settings
from django.db import models

from study.models import ForEntrant, ForStudent

from utils.slug import get_slug


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

    get_slug = get_slug

    def save(self, *args, **kwargs):
        self.get_slug()
        super().save(*args, **kwargs)

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

    get_slug = get_slug

    def save(self, *args, **kwargs):
        self.get_slug()
        super().save(*args, **kwargs)

        super().save(*args, **kwargs)

    def __str__(self):
        return str(self.category_name)


class Partners(models.Model):
    class Meta:
        verbose_name_plural = "Партнери"

    name = models.CharField("Назва", max_length=250)
    image = models.ImageField(verbose_name='Зображення', upload_to="about/partners/image")
    link = models.CharField(
        verbose_name='Посилання на сайт партнера',
        max_length=1000,
        blank=True,
    )
    pub_date = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(max_length=settings.SLUG_LENGTH, default='', blank=True, editable=False)

    get_slug = get_slug

    def save(self, *args, **kwargs):
        self.get_slug()
        super().save(*args, **kwargs)

        super().save(*args, **kwargs)

    def __str__(self):
        return str(self.name)


class UsefulLink(models.Model):
    class Meta:
        verbose_name_plural = "Корисні посилання"

    name = models.CharField(verbose_name='Назва посилання', max_length=100)
    for_students = models.ForeignKey(
        ForStudent,
        on_delete=models.CASCADE,
        verbose_name='Посилання на ресурс "стеденту"',
        blank=True, null=True
    )
    for_entrants = models.ForeignKey(
        ForEntrant,
        on_delete=models.CASCADE,
        verbose_name='Посилання на ресурс "абітурієнту"', blank=True,
        null=True
    )
    own_link = models.CharField(
        verbose_name='Власне посилання',
        max_length=500,
        null=True,
        blank=True
    )

    def __str__(self):
        return str(self.name)


class UsefulLinkGroup(models.Model):
    class Meta:
        verbose_name_plural = "Група корисних посилань"

    group_name = models.CharField("Назва групи", max_length=100)
    resource = models.ManyToManyField(UsefulLink, verbose_name='Ресурс', blank=True)
    pub_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.group_name)
