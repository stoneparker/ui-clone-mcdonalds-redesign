import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

import Weight from '../../assets/weight.svg';
import BurgerSize from '../../assets/burger-size.svg';
import Clock from '../../assets/clock.svg';

import products from '../../services/products';

import ProductDetailsHeader from '../../components/ProductDetailsHeader';

import { 
  Container,
  ProductImgContainer,
  ProductImg,
  Content,
  Title,
  Price,
  Description,
  CharacteristicsContainer,
  CharacteristicTitle,
  CharacteristicContent,
  CharacteristicText,
  SessionTitle,
  Option,
  Footer,
  CounterContainer,
  CounterBtn,
  CounterText,
  AddToCartBtn,
  AddToCartBtnText,
} from './styles';

const ProductDetails = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([1, 3, 4]);
  const [selectedBread, setSelectedBread] = useState(1);
  const [productQtd, setProductQtd] = useState(1);
  const [headerBackground, setHeaderBackground] = useState('transparent');

  const { ingredients } = products[0];
  const { breads } = products[0];

  function handleSelectedIngredients(id) {
    const alreadySelected = selectedIngredients.findIndex(item => item === id)

    if (alreadySelected >= 0) {
        const filteredItems = selectedIngredients.filter(item => item !== id)

        setSelectedIngredients(filteredItems);
    } else {
        setSelectedIngredients([ ...selectedIngredients, id]);
    }
  }

  function handleSelectedBread(id) {
    setSelectedBread(id);
  }

  function handleScroll(e) {
    const { y } = e.nativeEvent.contentOffset;

    if (y >= 236.5) {
      setHeaderBackground('#F6F6F6');
    } else {
      setHeaderBackground('transparent');
    }

  }

  return (
    <>
      <StatusBar style="auto" backgroundColor="#f00" />
      <ProductDetailsHeader background={headerBackground} />
      <Container 
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
      >
        
        <ProductImgContainer>
          <ProductImg 
            source={require('../../assets/Burger.png')} 
            resizeMode="contain"
          />
        </ProductImgContainer>
        <Content>
          <Title>Triple Cheeseburger</Title>
          <Price>$ 5.35</Price>
          <Description>Big burger with 3x beef, grilled bacon, cheese, tomato, pickle cucumber, papric, onion and salat.</Description>

          <CharacteristicsContainer>
            
            <View>
              <CharacteristicTitle>Size</CharacteristicTitle>
              <CharacteristicContent>
              <BurgerSize fill="#312C24" width={25} height={25} />
                <CharacteristicText>Big</CharacteristicText>
              </CharacteristicContent>
            </View>

            <View>
              <CharacteristicTitle>Weight</CharacteristicTitle>
              <CharacteristicContent>
              <Weight fill="#312C24" width={25} height={25} />
                <CharacteristicText>500g</CharacteristicText>
              </CharacteristicContent>
            </View>

            <View>
              <CharacteristicTitle>Prepare time</CharacteristicTitle>
              <CharacteristicContent>
              <Clock fill="#312C24" width={25} height={25} />
                <CharacteristicText>8 mins</CharacteristicText>
              </CharacteristicContent>
            </View>

          </CharacteristicsContainer>

          <SessionTitle>Ingredients</SessionTitle>
          <View style={{ marginBottom: 20 }}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ marginLeft: -5 }}
            >
              { ingredients.map(item => (
                <Option 
                  key={item.ingredient_id}
                  onPress={() => handleSelectedIngredients(item.ingredient_id)}
                  selected={selectedIngredients.includes(item.ingredient_id) ? true : false}
                >
                  {item.ingredient_img}
                </Option>
              ))}
            </ScrollView>
          </View>

          <SessionTitle>Bread</SessionTitle>
          <View style={{ marginBottom: 20 }}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ marginLeft: -5 }}
            >
              { breads.map(item => (
                <Option 
                  key={item.bread_id}
                  selected={selectedBread === item.bread_id ? true : false}
                  onPress={() => handleSelectedBread(item.bread_id)}
                >
                  {item.bread_img}
                </Option>  
              )) }
            </ScrollView>
          </View>

          <Footer>
            <CounterContainer>
              <CounterBtn onPress={() => setProductQtd(productQtd > 1 ? productQtd - 1 : productQtd)}>
                <CounterText>-</CounterText>
              </CounterBtn>
              <CounterText>{productQtd}</CounterText>
              <CounterBtn onPress={() => setProductQtd(productQtd + 1)}>
                <CounterText>+</CounterText>
              </CounterBtn>
            </CounterContainer>
            <AddToCartBtn>
              <Ionicons name="ios-cart" color="#FFF" size={22} />
              <AddToCartBtnText>Add to cart</AddToCartBtnText>
            </AddToCartBtn>
          </Footer>
        </Content>
      </Container>
    </>
  );
}

export default ProductDetails;