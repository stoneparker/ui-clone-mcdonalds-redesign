import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { 
    Container,
    GoBackBtn,
    RightBtns,
    LikeBtn,
    ShoppingCartBtn,
} from './styles';

const ProductDetailsHeader = () => {
    const { goBack } = useNavigation();

    return (
        <Container>
            <GoBackBtn onPress={() => goBack()}>
                <Feather name="chevron-left" size={17} />
            </GoBackBtn>
            <RightBtns>
                <LikeBtn>
                    <Feather name="heart" size={17} />
                </LikeBtn>
                <ShoppingCartBtn>
                    <Feather name="shopping-cart" size={17} />
                </ShoppingCartBtn>
            </RightBtns>
        </Container>
    );
}

export default ProductDetailsHeader;