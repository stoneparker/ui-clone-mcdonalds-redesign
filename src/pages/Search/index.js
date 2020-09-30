import React from 'react';
import { ScrollView, View } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

import { 
  Container,
  Title,
  SearchContainer,
  InputBox,
  TextInput,
  OptionsContainer,
  Subtitle,
  Category,
  CategoryTitle,
  CategoryImg
} from './styles';

const Search = () => {

  const categories = [
    { 
      id: 1,
      name: 'Burgers',
      color: '#FD7B10',
      img_url: 'https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4132.png'
    },
    { 
      id: 2,
      name: 'Wraps',
      color: '#FFC808',
      img_url: 'https://www.uokpl.rs/fpng/f/384-3842324_twister-kfc-png.png'
    },
    { 
      id: 3,
      name: 'Chickens',
      color: '#4ECE02',
      img_url: 'https://cdn.shopify.com/s/files/1/0009/3906/5407/products/chicken-nuggets-png-chicken-nuggets-nutrition-500_1024x1024.png?v=1534935270'
    },
    { 
      id: 4,
      name: 'Ice Cream',
      color: '#2BB4F3',
      img_url: 'https://d25dk4h1q4vl9b.cloudfront.net/media/images/menu-content/PA/postres/sundaes.png'
    },
    { 
      id: 5,
      name: 'Drinks',
      color: '#A747BD',
      img_url: 'https://lh3.googleusercontent.com/proxy/8IGyUl9yxYZne20K7kc5ePJOMbYKzSzJ2ACUqhLac0AhrmBTUuR5LtYkcvpDJmKky-lw83jh3pFRelWps5nUgJ4yuiQdFtryK-Zx07NQNcSuisD2bo6VwJEJkepWnRzi0D_bRDcSkYpD'
    },
    { 
      id: 6,
      name: 'Fries',
      color: '#E100E1',
      img_url: 'https://webstockreview.net/images/fries-clipart-large.png'
    },
  ]

  return (
    <Container showsVerticalScrollIndicator={false}>
      <Title>Discover New Flavors</Title>

      <SearchContainer>
        <InputBox>
          <Feather name="search" color="#312C24" size={25} />
          <TextInput placeholder="Search" placeholderTextColor="#312C24" />
        </InputBox>
        <OptionsContainer>
          <Ionicons name="ios-options" color="#443A1F" size={27} />
        </OptionsContainer>
      </SearchContainer>

      <Subtitle>Categories</Subtitle>

      <View style={{ marginHorizontal: -3, marginBottom: 10 }}>
        <ScrollView>
          { categories.map(item =>(
            <Category key={item.id} color={item.color}>
              <CategoryTitle>{item.name}</CategoryTitle>

              <CategoryImg 
                source={{ uri: item.img_url }} 
                resizeMode="center"
              />
            </Category>
          ))}
        </ScrollView>
      </View>

    </Container>
  );
}

export default Search;