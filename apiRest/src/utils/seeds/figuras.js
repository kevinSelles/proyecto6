require('dotenv').config();

const mongoose = require('mongoose');
const Figura = require('../../api/models/figuras');
const connectDB = require('../../config/db');

const seedFiguras = async () => {
  try {
    await connectDB();

    await Figura.deleteMany();

  const figuras = [
  { 
    nombre: 'Goku Super Saiyan', 
    imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffrikipolis.com%2Ffigura-dragon-ball-z-goku-super-saiyan-master-stars%2F%3Fsrsltid%3DAfmBOoq-jvLOCOvuH7LxMnaB1MN9aHEc_8EkKfk-PCwa_AdfZeYCxFjr&psig=AOvVaw0L7j3_6a5JobjBMOfrKoxp&ust=1757452255909000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNiEzf2Jyo8DFQAAAAAdAAAAABAe',
    precio: 25,
    tamaño: '15cm',
    tipo: 'Héroe',
    descripcion: 'Figura de Goku en modo Super Saiyan'
  },
  { 
    nombre: 'Vegeta Super Saiyan',
    imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.banpresto.es%2Fproducto%2Ffigura-vegeta-super-saiyan-dragon-ball-z-grandista-26cm%2F%3Fsrsltid%3DAfmBOorkytOEEjqbReBci8u-O9Umiz2DAfvQosuYOjnvIrnPBWFRx6eP&psig=AOvVaw1Yo-Wd6T3vqxIitr3Yz2Bj&ust=1757452432142000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNj1zNKKyo8DFQAAAAAdAAAAABAV',
    precio: 23,
    tamaño: '14cm',
    tipo: 'Héroe',
    descripcion: 'Figura de Vegeta en modo Super Saiyan'
  },
  { 
    nombre: 'Freezer Forma Final',
    imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elcorteingles.es%2Fjuguetes%2FA52333826-figura-freezer-final-form-limit-breaker-dragon-ball-bandai%2F&psig=AOvVaw0EOXdHgeIrMO4Ozpum6jXA&ust=1757452686623000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMjvk9qLyo8DFQAAAAAdAAAAABAV',
    precio: 20,
    tamaño: '12cm',
    tipo: 'Villano',
    descripcion: 'Figura de Freezer en su forma final'
  },
  { 
    nombre: 'Cell Forma Perfecta',
    imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.banpresto.es%2Fperfect-cell-en-dragon-ball-z-historia-transformaciones-y-legado%2F%3Fsrsltid%3DAfmBOopE203zDV2OVoP8VPD22zLp7VZNLMdwt9s7n-wfHBiLDOSnVnSc&psig=AOvVaw19JZj1nNznXZrysSr8CXwl&ust=1757452804123000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPjC6YaMyo8DFQAAAAAdAAAAABAE',
    precio: 22,
    tamaño: '16cm',
    tipo: 'Villano',
    descripcion: 'Figura de Cell en su forma perfecta'
  },
  { 
    nombre: 'Gohan Adolescente',
    imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.es%2FTAMASHII-NATIONS-Figura-guerrero-Figuarts%2Fdp%2FB0CNJVNH88&psig=AOvVaw1_7DAhDxcessHNbIR5fm5B&ust=1757452871328000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKDVwaeMyo8DFQAAAAAdAAAAABAE',
    precio: 18,
    tamaño: '13cm',
    tipo: 'Héroe',
    descripcion: 'Figura de Gohan adolescente luchando'
  },
];

    await Figura.insertMany(figuras);
    console.log('Figuras de Dragon Ball añadidas');
    process.exit();
  } catch (error) {
    console.error('Error creando seed:', error);
  }
};

seedFiguras();