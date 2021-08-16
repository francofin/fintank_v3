# Generated by Django 3.0.7 on 2021-08-05 06:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('research', '0004_stock_ticker'),
    ]

    operations = [
        migrations.AddField(
            model_name='stock',
            name='exchange',
            field=models.CharField(default='', max_length=300),
        ),
        migrations.AddField(
            model_name='stock',
            name='name',
            field=models.CharField(default='', max_length=300),
        ),
        migrations.AlterField(
            model_name='stock',
            name='ticker',
            field=models.CharField(max_length=300),
        ),
    ]