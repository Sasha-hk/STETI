from django import template



register = template.Library()

@register.tag
def check_path(request, pattern):
    if request.path == pattern:
        return True
    
    return False