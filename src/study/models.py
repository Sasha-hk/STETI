from django.db import models
from string import ascii_letters
from random import choice
from ckeditor.fields import RichTextField


class Department(models.Model):
    class Meta:
        verbose_name_plural = "Кафедри"

    name = models.CharField('Назва кафедри', max_length=100)
    description = models.TextField('Опис кафедри')
    pub_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.name)


class ForStudent(models.Model):
    class Meta:
        verbose_name_plural = "Для студентів"

    title = models.CharField('Назва', max_length=100)
    content = RichTextField('Вміст', blank=True)
    link = models.CharField('Посилання на ресурс', max_length=500, blank=True, help_text='Якщо ви лишаєте посилання на ресурс то поле "вміст" поля не біде доступні')
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
    class Meta:
        verbose_name_plural = "Для абітурієнтів"

    title = models.CharField('Назва', max_length=100)  
    content = RichTextField('Вміст', blank=True)
    link = models.CharField('Посилання на ресурс', max_length=500, blank=True, help_text='Якщо ви лишаєте посилання на ресурс то поле "вміст" поля не біде доступні')
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


class LibraryCategory(models.Model):
    class Meta:
        verbose_name_plural = "Категорії бібліотеки"

    category_name = models.CharField(verbose_name='Назва категорії', max_length=100)
    background = models.ImageField(verbose_name='Фон для кафелри', upload_to='study/library/library-category-img/', null=True, blank=True)
    slug = models.SlugField(max_length=10, default='', blank=True, editable=False) 

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
        return str(self.category_name)

class LibraryItem(models.Model):
    class Meta:
        verbose_name_plural = "Вміст бібліотеки"

    name = models.CharField(verbose_name='Нащва ресурсу', max_length=100)
    category = models.ForeignKey(LibraryCategory, verbose_name='Наледить до категорії', on_delete=models.CASCADE)
    link = models.CharField(verbose_name='Посилання на ресурс', max_length=200)

    def __str__(self):
        return self.name[:20]