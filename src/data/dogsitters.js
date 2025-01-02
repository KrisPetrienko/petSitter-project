import img1 from '../images/dogsitters-photo/img1.jpeg';
import img2 from '../images/dogsitters-photo/img2.jpeg';
import img3 from '../images/dogsitters-photo/img3.jpeg';
import img4 from '../images/dogsitters-photo/img4.jpeg';
import img5 from '../images/dogsitters-photo/img5.jpeg';
import img6 from '../images/dogsitters-photo/img6.jpeg';
import img7 from '../images/dogsitters-photo/img7.jpeg';
import img8 from '../images/dogsitters-photo/img8.jpeg';
import img9 from '../images/dogsitters-photo/img9.jpeg';
import img10 from '../images/dogsitters-photo/img10.jpeg';
import img11 from '../images/dogsitters-photo/img11.jpeg';
import img12 from '../images/dogsitters-photo/img12.jpeg';
import img13 from '../images/dogsitters-photo/img13.jpeg';
import img14 from '../images/dogsitters-photo/img14.jpeg';
import img15 from '../images/dogsitters-photo/img15.jpeg';
import img16 from '../images/dogsitters-photo/img16.jpeg';



const USERS = [
  { 
    id: 'q1',
    img: img1,
    name: 'Anna Smith',
    city: 'Helsinki',
    aboutMe: `I love animals very much. Now we don’t have our own dog, but my husband and I are happy to invite all lop-eared and wet-nosed ones to visit us for a temporary stay.`,
    price: 50,
    catSitter: false,
    dogSitter: true,
    dogWalker: true,
  },
  {
    id: 'q2',
    img: img2,
    name: 'Joan Doe',
    city: 'Espoo',
    aboutMe: `I am a dog lover and have two Labradors of my own. I am happy to care for your pet while you're on vacation or at work. 
    My house has a big backyard for dogs to play, and I enjoy taking long walks in the park.`,
    price: 40,
    catSitter: true,
    dogSitter: false,
    dogWalker: true,
  },
  {
    id: 'q3',
    img: img3,
    name: 'Emily Johnson',
    city: 'Tampere',
    aboutMe: `I grew up surrounded by animals and have always had a special connection with dogs. 
    I provide a safe and cozy environment for your furry friend and make sure they feel at home.`,
    price: 45,
    catSitter: true,
    dogSitter: true,
    dogWalker: true,
  },
  {
    id: 'q4',
    img: img4,
    name: 'Milana Brown',
    city: 'Helsinki',
    aboutMe: `I’m an experienced dog sitter with over five years of experience. I understand how important it is to keep pets happy and healthy while you're away.`,
    price: 55,
    catSitter: true,
    dogSitter: false,
    dogWalker: false,
  },
  {
    id: 'q5',
    img: img5,
    name: 'Sophia Davis',
    city: 'Vantaa',
    aboutMe: `I am a student who loves animals. I offer dog-sitting services during weekends and holidays. Your pet will be loved and well-cared-for.`,
    price: 35,
    catSitter: true,
    dogSitter: true,
    dogWalker: true,
  },
  {
    id: 'q6',
    img: img6,
    name: 'Wanessa Garcia',
    city: 'Espoo',
    aboutMe: `I live in a spacious apartment and enjoy spending time with animals. I will treat your dog as if it were my own.`,
    price: 60,
    catSitter: true,
    dogSitter: true,
    dogWalker: false,
  },
  {
    id: 'q7',
    img: img7,
    name: 'Isabella Martinez',
    city: 'Tampere',
    aboutMe: `I’m passionate about dogs and have been providing dog-sitting services for the past three years. Your pet's happiness and safety are my top priorities.`,
    price: 50,
    catSitter: false,
    dogSitter: true,
    dogWalker: true,
  },
  {
    id: 'q8',
    img: img8,
    name: 'Paola Wilson',
    city: 'Helsinki',
    aboutMe: `I work remotely and can give your dog the attention they need all day long. I also enjoy daily walks and playing games with pets.`,
    price: 65,
    catSitter: true,
    dogSitter: false,
    dogWalker: true,
  },
  {
    id: 'q9',
    img: img9,
    name: 'Charlotte Anderson',
    city: 'Vantaa',
    aboutMe: `I’m an animal enthusiast who has been taking care of dogs for years. I ensure every dog feels loved and cared for in my home.`,
    price: 45,
    catSitter: true,
    dogSitter: true,
    dogWalker: true,
  },
  {
    id: 'q10',
    img: img10,
    name: 'Olivia Thomas',
    city: 'Espoo',
    aboutMe: `I have a large backyard and live near a forest trail where I take dogs for long walks. Your pet will have a great time here.`,
    price: 55,
    catSitter: false,
    dogSitter: false,
    dogWalker: true,
  },
  {
    id: 'q11',
    img: img11,
    name: 'Mia White',
    city: 'Helsinki',
    aboutMe: `I live in a quiet neighborhood with plenty of parks around. I enjoy taking care of dogs and will make sure they feel at home.`,
    price: 50,
    catSitter: true,
    dogSitter: true,
    dogWalker: true,
  },
  {
    id: 'q12',
    img: img12,
    name: 'Lusia Harris',
    city: 'Tampere',
    aboutMe: `I am an experienced dog walker and sitter who loves spending time with pets. I can also help with basic training if needed.`,
    price: 60,
    catSitter: true,
    dogSitter: false,
    dogWalker: false,
  },
  {
    id: 'q13',
    img: img13,
    name: 'Amelia Clark',
    city: 'Vantaa',
    aboutMe: `As a lifelong dog lover, I have a natural connection with animals. I provide a warm and welcoming environment for your pet.`,
    price: 40,
    catSitter: true,
    dogSitter: true,
    dogWalker: true,
  },
  {
    id: 'q14',
    img: img14,
    name: 'Benjamin Walker',
    city: 'Espoo',
    aboutMe: `I’m a retired individual who spends most of my time at home. I would love to have a furry friend to keep me company during the day.`,
    price: 35,
    catSitter: false,
    dogSitter: true,
    dogWalker: true,
  },
  {
    id: 'q15',
    img: img15,
    name: 'Evelyn Hall',
    city: 'Tampere',
    aboutMe: `Your pet's happiness and comfort are my priority. I have experience with both large and small breeds and can handle special care needs.`,
    price: 70,
    catSitter: false,
    dogSitter: false,
    dogWalker: true,
  },
  {
    id: 'q16',
    img: img16,
    name: 'Hanna Young',
    city: 'Helsinki',
    aboutMe: `I’ve been a dog owner all my life and now offer dog-sitting services. Your pet will be treated with love and care in my home.`,
    price: 45,
    catSitter: true,
    dogSitter: true,
    dogWalker: true,
  },
];

export default USERS;
