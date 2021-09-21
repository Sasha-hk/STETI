from django.db import models
from string import ascii_letters
from random import choice

class Images(models.Model):
    name = models.CharField('Підпис картинки', max_length=30)
    img = models.ImageField('Забраження', upload_to='NAE/images/')
    pub_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.name)

class Advertisement(models.Model):
    title = models.CharField('Назва оголошення', max_length=100)
    description = models.TextField('Опис оголошення')
    baner = models.ImageField('Банер', upload_to='NAE/advertisment/') 
    images = models.ManyToManyField(Images, blank=True)
    pub_date = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(max_length=11, default='', blank=True, editable=False) 

    def generate_slug(self):
        slug_str = '' 

        if self.slug == '': 
            for i in range(0, Advertisement._meta.get_field('slug').max_length):
                slug_str += choice(ascii_letters) 
            while True: 
                if Advertisement.objects.filter(slug = slug_str).exists():  
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
    title = models.CharField('Назва новини', max_length=100)
    description = models.TextField('Опис новини')
    baner = models.ImageField('Банер', upload_to='NAE/news/') 
    images = models.ManyToManyField(Images, blank=True)
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


class Event(models.Model):
    title = models.CharField('Назва події', max_length=100)
    description = models.TextField('Опис події')
    baner = models.ImageField('Банер', upload_to='NA/envent/')
    event_date = models.DateTimeField('Дата проведення')
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