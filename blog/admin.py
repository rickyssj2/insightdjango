from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin

class PostAdmin(SummernoteModelAdmin):
    summernote_fields = ('body',)

from .models import Post

admin.site.register(Post, PostAdmin)