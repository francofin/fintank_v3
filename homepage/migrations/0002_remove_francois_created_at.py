# Generated by Django 3.0.7 on 2021-08-03 05:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('homepage', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='francois',
            name='created_at',
        ),
    ]