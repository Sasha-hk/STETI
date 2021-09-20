from django.db import models
from string import ascii_letters
from random import choice


class Department(models.Model):
    name = models.CharField('Назва кафедри', max_length=100)
    description = models.TextField('Опис кафедри')
    pub_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.name)


class ForStudent(models.Model):
    title = models.CharField('Назва', max_length=100)  
    content = models.TextField('Вміст', blank=True) 
    pub_date = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(max_length=11, default='', blank=True, editable=False) 

    def generate_slug(self):
        slug_str = '' 

        if self.slug == '': 
            for i in range(0, ForStudent._meta.get_field('slug').max_length):
                slug_str += choice(ascii_letters) 
            while True: 
                if ForStudent.objects.filter(slug = slug_str).exists():  
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

class ForEntrant(models.Model):
    title = models.CharField('Назва', max_length=100)  
    content = models.TextField('Вміст', blank=True)
    pub_date = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(max_length=11, default='', blank=True, editable=False) 

    def generate_slug(self):
        slug_str = '' 

        if self.slug == '': 
            for i in range(0, ForEntrant._meta.get_field('slug').max_length):
                slug_str += choice(ascii_letters) 
            while True: 
                if ForEntrant.objects.filter(slug = slug_str).exists():  
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