# Generated by Django 3.0.7 on 2021-08-05 04:30

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ResearchPageImages',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('page_usage', models.CharField(max_length=300)),
                ('images1', models.ImageField(upload_to='photos/%Y/%m/%d/')),
                ('images2', models.ImageField(upload_to='photos/%Y/%m/%d/')),
                ('images3', models.ImageField(upload_to='photos/%Y/%m/%d/')),
                ('images4', models.ImageField(upload_to='photos/%Y/%m/%d/')),
                ('images5', models.ImageField(upload_to='photos/%Y/%m/%d/')),
                ('images6', models.ImageField(upload_to='photos/%Y/%m/%d/')),
                ('images7', models.ImageField(upload_to='photos/%Y/%m/%d/')),
                ('images8', models.ImageField(upload_to='photos/%Y/%m/%d/')),
                ('images9', models.ImageField(upload_to='photos/%Y/%m/%d/')),
                ('images10', models.ImageField(upload_to='photos/%Y/%m/%d/')),
                ('images11', models.ImageField(upload_to='photos/%Y/%m/%d/')),
                ('images12', models.ImageField(upload_to='photos/%Y/%m/%d/')),
            ],
        ),
    ]
