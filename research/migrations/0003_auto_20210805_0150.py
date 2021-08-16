# Generated by Django 3.0.7 on 2021-08-05 05:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('research', '0002_stock'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='stock',
            name='ticker',
        ),
        migrations.AddField(
            model_name='stock',
            name='is_featured',
            field=models.BooleanField(default=True),
        ),
    ]