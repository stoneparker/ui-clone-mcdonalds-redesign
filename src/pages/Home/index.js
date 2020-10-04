import React, { useState } from 'react';
import { ScrollView, View, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Hamburger from '../../assets/hamburger.svg';
import Kebab from '../../assets/kebab.svg';
import Chicken from '../../assets/chicken.svg';
import IceCream from '../../assets/ice-cream.svg';
import Fries from '../../assets/fries.svg';
import Soda from '../../assets/soda.svg';

import products from '../../services/products';

import { 
  Container,
  Content,
  Greenting,
  GreetingText,
  Title,
  SubHeader,
  Subtitle,
  SubHeaderOptions,
  SubHeaderOption,
  SelectedIndicator,
  Category,
  Product,
  ProductImg,
  ProductName,
  ProductFooter, 
  ProductPrice, 
  BtnAddToCart,
  styles, 
} from './styles';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const { navigate } = useNavigation();

  const categories = [
    { 
      id: 1,
      img: <Hamburger fill={selectedCategory === 1 ? '#FFF' : '#F37713'} width={30} height={30} />,
    },
    { 
      id: 2,
      img: <Kebab fill={selectedCategory === 2 ? '#FFF' : '#F37713'} width={30} height={30} />,
    },
    { 
      id: 3,
      img: <Chicken fill={selectedCategory === 3 ? '#FFF' : '#F37713'} width={30} height={30} />,
    },
    { 
      id: 4,
      img: <IceCream fill={selectedCategory === 4 ? '#FFF' : '#F37713'} width={30} height={30} />,
    },
    { 
      id: 5,
      img: <Fries fill={selectedCategory === 5 ? '#FFF' : '#F37713'} width={30} height={30} />,
    },
    { 
      id: 6,
      img: <Soda fill={selectedCategory === 6 ? '#FFF' : '#F37713'} width={30} height={30} />,
    },
  ]

  return (
    <Container>
      <FlatList 
        ListHeaderComponent={
          <Content>
            <Greenting>Hey <GreetingText>Mike</GreetingText>,</Greenting>

            <Title>Choose Your Best Meal</Title>

            <View style={{ marginHorizontal: -30 }}>
              <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 30 }}
              >
                { categories.map(item => (
                  <Category 
                    key={item.id}
                    onPress={() => setSelectedCategory(item.id)}
                    style={
                      selectedCategory === item.id ? 
                      styles.categorySelected 
                      : {}
                    }
                  >{item.img}</Category>  
                ))}
              </ScrollView>
            </View>
            
            <SubHeader>
              <Subtitle>Popular</Subtitle>

              <SubHeaderOptions>
                <SubHeaderOption selected>Top</SubHeaderOption>
                <SubHeaderOption>New</SubHeaderOption>
              </SubHeaderOptions>
            </SubHeader>
          </Content>
        }
        data={products}
        keyExtractor={product => String(product.product_id)}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: 15, width: '100%' }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Product onPress={() => { item.product_id == 1 ? navigate('ProductDetails') : {} }}>
            <ProductImg 
              source={{ uri: item.product_img }} 
              resizeMode='contain'
            />
            <ProductName>{item.product_name}</ProductName>
            <ProductFooter>
              <ProductPrice>$ {item.product_price}</ProductPrice>
              <BtnAddToCart>
                <Feather name="shopping-cart" size={14} color="#47BC00" />
              </BtnAddToCart>
            </ProductFooter>
          </Product>
        )}
      />
    </Container>
  );
}

export default Home;