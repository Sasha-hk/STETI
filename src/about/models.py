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