from random import choice
from string import ascii_letters

from django.conf import settings


# slug generator
def generate_slug():
    slug = ""
    chars_count = 0

    while chars_count < settings.SLUG_LENGTH:
        slug += choice(ascii_letters)
        chars_count += 1

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
