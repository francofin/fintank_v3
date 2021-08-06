# Generated by Django 3.0.7 on 2021-08-06 04:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('research', '0005_auto_20210805_0213'),
    ]

    operations = [
        migrations.CreateModel(
            name='Commoditie',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ticker', models.CharField(max_length=300)),
                ('name', models.CharField(max_length=300)),
            ],
        ),
        migrations.CreateModel(
            name='ETF',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ticker', models.CharField(max_length=300)),
                ('name', models.CharField(max_length=300)),
            ],
        ),
        migrations.CreateModel(
            name='MutualFund',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ticker', models.CharField(max_length=300)),
                ('name', models.CharField(max_length=300)),
            ],
        ),
        migrations.CreateModel(
            name='Nasdaq',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ticker', models.CharField(max_length=300)),
                ('name', models.CharField(max_length=300)),
                ('exchange', models.CharField(max_length=300)),
            ],
        ),
        migrations.CreateModel(
            name='SP500',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ticker', models.CharField(max_length=300)),
                ('name', models.CharField(max_length=300)),
                ('sector', models.CharField(max_length=300)),
                ('sub_sector', models.CharField(max_length=300)),
                ('founded', models.CharField(max_length=300)),
            ],
        ),
        migrations.CreateModel(
            name='TSX',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ticker', models.CharField(max_length=300)),
                ('name', models.CharField(max_length=300)),
                ('currency', models.CharField(max_length=300)),
            ],
        ),
    ]
