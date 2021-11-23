from random import choice
from string import ascii_letters

from ckeditor.fields import RichTextField

from django.conf import settings
from django.db import models


# slug generator
def generate_slug():
    slug = ""
    for random_char in range(settings.SLUG_LENGTH):
        slug += choice(ascii_letters)

    return slug


# slug setter
def get_slug(self):
    slug = generate_slug()

    if self.slug == '':
        slug = generate_slug()
        while True:
            if type(self).objects.filter(slug=slug).exists():
                slug = generate_slug()

            else:
                self.slug = slug
                break


class Images(models.Model):
    class Meta:
        verbose_name_plural = "Фото до новин та оголошень"

    name = models.CharField('Підпис картинки', max_length=30)
    img = models.ImageField('Забраження', upload_to='NAE/images/')
    pub_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.name)


class NewsAndAnnouncements(models.Model):
    class Meta:
        verbose_name_plural = "Новини та оголошення"

    title = models.CharField('Заголовок', max_length=100)
    short_description = RichTextField(verbose_name='Коротки опис', blank=True)
    body = RichTextField('Опис', blank=True)
    img = models.ImageField('Банер', upload_to='NAE/advertisment/', blank=True)
    imgs = models.ManyToManyField(Images, blank=True)
    pub_date = models.DateTimeField(auto_now_add=True)
    attach_at_home = models.BooleanField(verbose_name="Звкріпити на домашній сторінці", default=False)
    slug = models.SlugField(max_length=settings.SLUG_LENGTH, default='', blank=True, editable=False)

    get_slug = get_slug

    def save(self, *args, **kwargs):
        self.get_slug()
        super().save(*args, **kwargs)

    def __str__(self):
        return str(self.title)


class Event(models.Model):
    class Meta:
        verbose_name_plural = "Події"

    title = models.CharField('Назва події', max_length=100)
    content = RichTextField('Опис події', blank=True)
    img = models.ImageField('Банер', upload_to='NA/envent/', blank=True)
    event_date_from = models.DateTimeField(
        'Дата проведення',
        help_text='Якщо подія триватиме декілька днів то вкажіть "дата проведення до"',
        null=True,
        blank=True
    )
    event_date_to = models.DateTimeField('Дата проведення - до', null=True, blank=True)
    pub_date = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(max_length=settings.SLUG_LENGTH, default='', blank=True, editable=False)

    get_slug = get_slug

    def save(self, *args, **kwargs):
        self.get_slug()

        super().save(*args, **kwargs)

    def __str__(self):
        return str(self.title)
