#Import all required libraries
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
import tensorflow as tf
import numpy as np

def cnn():
    #set a random seed for reproducability
    seed= 42
    np.random.seed(seed)

    #Path for datasets

    image_width = 2048
    image_height = None
    if tf.keras.backend.image_data_format() == 'channels_first':
        input_shape = (3,image_width,image_height)
    else:
        input_shape = (image_width,image_height,3)

    print(input_shape)

    #Model Architecture
    with tf.device('/device:GPU:0'):
        model = tf.keras.models.Sequential([
            tf.keras.layers.Conv2D(16,(3,3),activation='relu',padding="same",input_shape=input_shape),
            tf.keras.layers.MaxPooling2D(2,2),
            tf.keras.layers.Conv2D(32,(3,3),activation='relu',padding="same"),
            tf.keras.layers.MaxPooling2D(2,2),
            tf.keras.layers.Conv2D(64,(3,3),activation='relu'),
            tf.keras.layers.MaxPooling2D(2,2),
            tf.keras.layers.Conv2D(64,(3,3),activation='relu'),
            tf.keras.layers.MaxPooling2D(2,2),
            tf.keras.layers.Conv2D(64,(3,3),activation='relu'),
            tf.keras.layers.MaxPooling2D(2,2),
            tf.keras.layers.GlobalMaxPool2D(),
            tf.keras.layers.Dense(128,activation='relu'),
            tf.keras.layers.Dropout(0.2),
            tf.keras.layers.Dense(9, activation='sigmoid')
            # tf.keras.layers.SeparableConv2D(16, (3, 3), activation='relu', padding="same", input_shape=input_shape),
            # tf.keras.layers.SeparableConv2D(32, (3, 3), activation='relu', padding="same", input_shape=input_shape),
            # tf.keras.layers.MaxPooling2D((2, 2)),
            #
            # tf.keras.layers.SeparableConv2D(64, (3, 3), activation='relu'),
            # tf.keras.layers.SeparableConv2D(64, (3, 3), activation='relu'),
            # tf.keras.layers.MaxPooling2D((2, 2)),
            #
            # tf.keras.layers.SeparableConv2D(64, (3, 3), activation='relu'),
            # tf.keras.layers.SeparableConv2D(128, (3, 3), activation='relu'),
            # tf.keras.layers.GlobalMaxPool2D(),
            #
            # tf.keras.layers.Dense(128, activation='relu'),
            # tf.keras.layers.Dropout(0.2),
            # tf.keras.layers.Dense(9, activation='sigmoid')
        ])


    model.summary()

    from tensorflow.keras.optimizers import RMSprop
    model.compile(optimizer = RMSprop(learning_rate=0.001),loss='binary_crossentropy',metrics=['accuracy'])
    print("CNN model complied")
    #rescaling the data to feed the images from directories
    from tensorflow.keras.preprocessing.image import ImageDataGenerator
    train_datagen=ImageDataGenerator(rescale=1./255)
    test_datagen=ImageDataGenerator(rescale=1./255)
    trainGenSet = train_datagen.flow_from_directory(
        "imagesV2/train/malware",
        target_size=(2048,256),
        color_mode="rgb",
        class_mode='categorical',
        batch_size=32,
    )
    testGenSet = test_datagen.flow_from_directory(
        "imagesV2/val/malware",
        target_size=(2048,256),
        color_mode="rgb",
        class_mode='categorical',
        batch_size=32,
    )

    #모델 학습 설정
    model.compile(loss='categorical_crossentropy',
                 optimizer='adam',
                 metrics=['accuracy'])

    model.fit(
        trainGenSet,
        steps_per_epoch=250,
        epochs=40,
        # validation_data=testGenSet,
        # validation_steps=10,
    )

    # scores = model.evaluate(testGenSet)
    # print(scores)

    model.save("cnn_model")
    return model
