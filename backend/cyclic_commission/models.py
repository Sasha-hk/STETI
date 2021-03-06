from ckeditor.fields import RichTextField

from django.conf import settings
from django.db import models

from utils.slug import get_slug


class CyclicCommissionImages(models.Model):
    class Meta:
        verbose_name_plural = 'Фото для путкта циклової комісії'

    name = models.CharField(verbose_name='Назва фото', max_length=200)
    imgs = models.ImageField(verbose_name='Фото', upload_to='study/cyclic-commissin/imgs')

    def __str__(self):
        return str(self.id) + str(self.name)


class CyclicCommissionItem(models.Model):
    class Meta:
        verbose_name_plural = 'Пункт в категорії циклової комісії'

    name = models.CharField(verbose_name='Назва пункту', max_length=200)
    img = models.ImageField(verbose_name='Головне фото', upload_to='study/cyclic-commissin/img', blank=True)
    body = RichTextField(verbose_name='Тіло путкта', blank=True)
    imgs = models.ManyToManyField(CyclicCommissionImages, verbose_name='Інші фото', blank=True)
    slug = models.SlugField(max_length=settings.SLUG_LENGTH, default='', blank=True, editable=False)
    pub_date = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, editable=False)

    get_slug = get_slug

    def save(self, *args, **kwargs):
        self.get_slug()

        super().save(*args, **kwargs)

    def __str__(self):
        return str(self.name)


class CyclicCommissionCategory(models.Model):
    class Meta:
        verbose_name_plural = 'Категорії циклової комісії'

    name = models.CharField(verbose_name='Назва циклової комісії', max_length=200)
    items = models.ManyToManyField(
        CyclicCommissionItem,
        verbose_name='Пункти в категорії циклової комісії',
        blank=True,
    )
    slug = models.SlugField(
        max_length=settings.SLUG_LENGTH,
        default='',
        blank=True,
        editable=False
    )
    pub_date = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, editable=False)

    get_slug = get_slug

    def save(self, *args, **kwargs):
        self.get_slug()

        super().save(*args, **kwargs)

    def __str__(self):
        return str(self.name)
