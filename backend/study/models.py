from ckeditor.fields import RichTextField

from django.conf import settings
from django.db import models

from utils.slug import get_slug


class Department(models.Model):
    class Meta:
        verbose_name_plural = 'Кафедри'

    name = models.CharField('Назва кафедри', max_length=100)
    description = models.TextField('Опис кафедри')
    pub_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.name)


class ForEntrantImages(models.Model):
    class Meta:
        verbose_name_plural = 'Більше фото "абітурієнту"'

    name = models.CharField(verbose_name='Назва фото', max_length=100)
    img = models.ImageField(verbose_name='Фото', upload_to='study/for-entrant/imgs')

    def __str__(self):
        return self.name


class ForEntrant(models.Model):
    class Meta:
        verbose_name_plural = 'Для абітурієнтів'

    title = models.CharField('Назва', max_length=100)
    content = RichTextField('Вміст', blank=True)
    img = models.ImageField(verbose_name='Фото', upload_to='study/for-entrant/img', blank=True)
    imgs = models.ManyToManyField(ForEntrantImages, verbose_name='Більше фото', blank=True)
    link = models.CharField(
        'Посилання на ресурс',
        max_length=500,
        blank=True,
        help_text='Якщо ви лишаєте посилання на ресурс то поле "вміст" не біде доступне'
    )
    pub_date = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(
        max_length=11,
        default='',
        blank=True,
        editable=False
    )

    get_slug = get_slug

    def save(self, *args, **kwargs):
        self.get_slug()
        super().save(*args, **kwargs)

    def __str__(self):
        return str(self.title)


class ForStudentImages(models.Model):
    class Meta:
        verbose_name_plural = 'Більше фото "студенту"'

    name = models.CharField(verbose_name='Назва фото', max_length=100)
    img = models.ImageField(verbose_name='Фото', upload_to='study/for-student/imgs')

    def __str__(self):
        return self.name


class ForStudent(models.Model):
    class Meta:
        verbose_name_plural = 'Для студентів'

    title = models.CharField('Назва', max_length=100)
    content = RichTextField('Вміст', blank=True)
    img = models.ImageField(verbose_name='Фото', upload_to='study/for-student/img', blank=True)
    imgs = models.ManyToManyField(ForStudentImages, verbose_name='Більше фото', blank=True)
    link = models.CharField(
        'Посилання на ресурс',
        max_length=500,
        blank=True,
        help_text='Якщо ви лишаєте посилання на ресурс то поле "вміст" не біде доступне'
    )
    pub_date = models.DateTimeField(auto_now_add=True)
    show_on_home = models.BooleanField(verbose_name='Показувати на домашній сторінці', default=False)
    slug = models.SlugField(max_length=11, default='', blank=True, editable=False)

    get_slug = get_slug

    def save(self, *args, **kwargs):
        self.get_slug()
        super().save(*args, **kwargs)

    def __str__(self):
        return str(self.title)


class LibraryItem(models.Model):
    class Meta:
        verbose_name_plural = 'Вміст бібліотеки'

    name = models.CharField(verbose_name='Назва ресурсу', max_length=100)
    link = models.CharField(verbose_name='Посилання на ресурс', max_length=200)

    def __str__(self):
        return self.name[:20]


class LibraryCategory(models.Model):
    class Meta:
        verbose_name_plural = 'Категорії бібліотеки'

    category_name = models.CharField(verbose_name='Назва категорії', max_length=100)
    background = models.ImageField(
        verbose_name='Фон для кафедри',
        upload_to='study/library/library-category-img/',
        null=True,
        blank=True
    )
    items = models.ManyToManyField(LibraryItem, verbose_name='Ресурси', blank=True)
    slug = models.SlugField(
        verbose_name='Slug',
        max_length=settings.SLUG_LENGTH,
        default='',
        blank=True,
        editable=False,
    )

    get_slug = get_slug

    def save(self, *args, **kwargs):
        self.get_slug()

        super().save(*args, **kwargs)

    def __str__(self):
        return str(self.category_name)
