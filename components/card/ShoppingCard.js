import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import { COLORS, FONTS } from '../../layout/GlobalTheme';
import ActionButton from '../button/ActionButton';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

const ShoppingCard = ({ title, image, price, unity, quantity, navigate }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={styles.cardWrapper}>
      <View style={styles.cardContainer}>
        <View style={styles.imageSection}>
          <Image source={image} style={styles.image} resizeMode="contain" />
        </View>

        <View style={styles.infoSection}>
          <View style={styles.titleRow}>
            <TouchableOpacity onPress={() => navigate && navigation.navigate(navigate)}>
              <Text style={[FONTS.h6, styles.titleText]} numberOfLines={1}>
                {title}
              </Text>
            </TouchableOpacity>

            <View style={styles.quantityBadge}>
              <Text style={[FONTS.fontSm, FONTS.fontBold, { color: COLORS.primary2 }]}>
                {quantity} / {unity}
              </Text>
            </View>
          </View>

          <View style={styles.bottomRow}>
            {price && (
              <View style={styles.priceContainer}>
                <Text style={[FONTS.fontSm, { color: colors.title, marginRight: 3 }]}>$</Text>
                <Text style={[FONTS.h6, { color: colors.title }]}>{price}</Text>
              </View>
            )}

            <View style={styles.actionButtons}>
              <ActionButton name="minus" color1={COLORS.primary4} color2={COLORS.primaryColor} />
              <View style={{ marginLeft: 8 }}>
                <ActionButton name="plus" color1={COLORS.primary2} color2="#22cf96" />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

ShoppingCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
  price: PropTypes.number,
  unity: PropTypes.string.isRequired,
  quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  navigate: PropTypes.string,
};

const styles = StyleSheet.create({
  cardWrapper: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: Platform.OS === 'ios' ? 0.15 : 0.3,
    shadowRadius: 5,
    elevation: 4,
    borderRadius: 18,
    backgroundColor: COLORS.cardBg,
    marginRight: 12,
    width: isTablet ? 600 : width * 0.9,
    alignSelf: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    borderRadius: 18,
    backgroundColor: COLORS.cardBg,
    padding: isTablet ? 18 : 12,
  },
  imageSection: {
    width: isTablet ? '30%' : '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: isTablet ? 90 : 65,
    height: isTablet ? 90 : 65,
  },
  infoSection: {
    width: isTablet ? '70%' : '60%',
    justifyContent: 'center',
    paddingHorizontal: isTablet ? 20 : 10,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: isTablet ? 12 : 8,
  },
  titleText: {
    color: COLORS.title,
    maxWidth: '85%',
  },
  quantityBadge: {
    backgroundColor: COLORS.primayLight2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ShoppingCard;
