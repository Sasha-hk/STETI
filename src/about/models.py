from django.db import models

class ContactsPhoneNumbers(models.Model):
    name = models.CharField('Назва відділення', max_length=100)
    phone_number = models.CharField('Номере телефону', max_length=15)

    def __str__(self):
        return self.name


class ContactsFace(models.Model):
    FL = models.CharField('ПІБ', max_length=200)
    view = models.ImageField('Фото', upload_to='about_us/faces')
    positon = models.CharField('Звання', max_length=100)
    description = models.TextField('Кородкий опис')
    phone_number = models.CharField('Номере телефону', max_length=15)

    def __str__(self):
        return self.FL


class GalleryCategoryImage(models.Model):
    name = models.CharField('Назва фото', max_length=100) 
    image = models.ImageField('Фото', upload_to='about/gallery')

    def __str__(self):
        return str(self.name)

class Gallery(models.Model):
    name = models.CharField('Назва фото', max_length=100) 
    image = models.ImageField('Фото', upload_to='about/gallery')

    def __str__(self):
        return str(self.name)

class GalleryCategory(models.Model):
    categoru_name = models.CharField("Ім'я категорії", max_length=100)
    image = models.ForeignKey(GalleryCategoryImage, verbose_name='Фото категоріії', on_delete=models.CASCADE, blank=True, null=True)
    images = models.ManyToManyField(Gallery, verbose_name='Більше фото')
    pub_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.categoru_name)
