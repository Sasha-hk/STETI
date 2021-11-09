from random import choice
from string import ascii_letters

from django.db import models
from ckeditor.fields import RichTextField



class Images(models.Model):
    class Meta:
        verbose_name_plural = "Фото до новин та оголошень"

    name = models.CharField('Підпис картинки', max_length=30)
    img = models.ImageField('Забраження', upload_to='NAE/images/')
    pub_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.name)


class Announcement(models.Model):
    class Meta:
        verbose_name_plural = "Оголошення"

    title = models.CharField('Назва оголошення', max_length=100)
    content = RichTextField('Опис оголошення', blank=True)
    img = models.ImageField('Банер', upload_to='NAE/advertisment/', blank=True) 
    imgs = models.ManyToManyField(Images, blank=True)
    pub_date = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(max_length=11, default='', blank=True, editable=False) 

    def generate_slug(self):
        slug_str = '' 

        if self.slug == '': 
            for i in range(0, Announcement._meta.get_field('slug').max_length):
                slug_str += choice(ascii_letters) 
            while True: 
                if Announcement.objects.filter(slug = slug_str).exists():  
                    for i in range(0, self.slug.max_length): 
                        slug_str += choice(ascii_letters)
            
                else: 
                    self.slug = slug_str
                    break

    def save(self, *args, **kwargs): 
        self.generate_slug()  

        super().save(*args, **kwargs)

    def __str__(self):
        return str(self.title)


class Event(models.Model):
    class Meta:
        verbose_name_plural = "Події"

    title = models.CharField('Назва події', max_length=100)
    content = RichTextField('Опис події', blank=True)
    img = models.ImageField('Банер', upload_to='NA/envent/', blank=True)
    event_date_from = models.DateTimeField('Дата проведення', help_text='Якщо подія триватиме декілька днів то вкажіть "дата проведення до"', null=True, blank=True)
    event_date_to = models.DateTimeField('Дата проведення - до', null=True, blank=True)
    pub_date = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(max_length=11, default='', blank=True, editable=False) 

    def generate_slug(self):
        slug_str = '' 

        if self.slug == '': 
            for i in range(0, Event._meta.get_field('slug').max_length):
                slug_str += choice(ascii_letters) 
            while True: 
                if Event.objects.filter(slug = slug_str).exists():  
                    for i in range(0, self.slug.max_length): 
                        slug_str += choice(ascii_letters)
            
                else: 
                    self.slug = slug_str
                    break

    def save(self, *args, **kwargs): 
        self.generate_slug()  

        super().save(*args, **kwargs)


    def __str__(self):
        return str(self.title)


class News(models.Model): 
    class Meta:
        verbose_name_plural = "Новини"

    title = models.CharField('Назва новини', max_length=100)
    content = RichTextField('Опис новини', blank=True)
    img = models.ImageField('Банер', upload_to='NAE/news/', blank=True)
    imgs = models.ManyToManyField(Images, blank=True)
    pub_date = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(max_length=11, default='', blank=True, editable=False) 


    def generate_slug(self):
        slug_str = '' 

        if self.slug == '': 
            for i in range(0, News._meta.get_field('slug').max_length):
                slug_str += choice(ascii_letters) 
            while True: 
                if News.objects.filter(slug = slug_str).exists():  
                    for i in range(0, self.slug.max_length): 
                        slug_str += choice(ascii_letters)
            
                else: 
                    self.slug = slug_str
                    break

    def save(self, *args, **kwargs): 
        self.generate_slug()  

        super().save(*args, **kwargs)

    def __str__(self):
        return str(self.title) 
