import React from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';
import { addCards, addCardEarnRates, addSpendBonusCategoryGroups } from '../services/dataService';

const DataUpload = () => {
  const handleUpload = async () => {
    try {
      const cards = [
        { cardKey: "chase-ihgtraveler", cardIssuer: "Chase", cardName: "IHG One Rewards Traveler" },
        { cardKey: "chase-ihgpremier", cardIssuer: "Chase", cardName: "IHG One Rewards Premier" },
        { cardKey: "chase-ihgrewardsclassic", cardIssuer: "Chase", cardName: "IHG® Rewards Classic" },
        { cardKey: "chase-ihgrewardsselect", cardIssuer: "Chase", cardName: "IHG® Rewards Select" },
        { cardKey: "chase-biz-ihgpremier", cardIssuer: "Chase", cardName: "IHG One Rewards Premier Business" },
        { cardKey: "chase-biz-ihgrewards", cardIssuer: "Chase", cardName: "IHG® Rewards Business" }
      ];

      const cardEarnRates = [
        { cardKey: "chase-hyatt", cardName: "World of Hyatt", cardIssuer: "Chase", earnRate: 2.0, isBonusRate: 1, baseSpendAmount: 1.0, baseSpendEarnType: "World of Hyatt Loyalty Program", baseSpendEarnCurrency: "points", googleMapsBusinessName: "wendys", googleMapsCategoryName: "Fast food restaurant" }
      ];

      const spendBonusCategoryGroups = [
        {
          "spendBonusCategoryGroup": "Services",
          "spendBonusSubcategoryGroup": [
            {
              "spendBonusSubcategoryGroup": "Media",
              "spendBonusCategory": [
                { "spendBonusCategoryName": "Advertisements", "spendBonusCategoryId": 1043850520 }
              ]
            },
            {
              "spendBonusSubcategoryGroup": "Health",
              "spendBonusCategory": [
                { "spendBonusCategoryName": "Fitness Clubs", "spendBonusCategoryId": 1576799624 }
              ]
            },
            {
              "spendBonusSubcategoryGroup": "Military",
              "spendBonusCategory": [
                { "spendBonusCategoryName": "Military", "spendBonusCategoryId": 1057789791 }
              ]
            },
            {
              "spendBonusSubcategoryGroup": "Shipping",
              "spendBonusCategory": [
                { "spendBonusCategoryName": "Shipping", "spendBonusCategoryId": 1661710546 }
              ]
            },
            {
              "spendBonusSubcategoryGroup": "Utilities",
              "spendBonusCategory": [
                { "spendBonusCategoryName": "Utilities", "spendBonusCategoryId": 1895002328 }
              ]
            }
          ]
        },
        {
          "spendBonusCategoryGroup": "Travel",
          "spendBonusSubcategoryGroup": [
            {
              "spendBonusSubcategoryGroup": "Airfare",
              "spendBonusCategory": [
                { "spendBonusCategoryName": "Air Canada", "spendBonusCategoryId": 645447711 },
                { "spendBonusCategoryName": "British Airways", "spendBonusCategoryId": 26822743 },
                { "spendBonusCategoryName": "Southwest", "spendBonusCategoryId": 1754257416 },
                { "spendBonusCategoryName": "United Airlines", "spendBonusCategoryId": 733185608 }
              ]
            },
            {
              "spendBonusSubcategoryGroup": "Travel Agency - Airfare",
              "spendBonusCategory": [
                { "spendBonusCategoryName": "Air Travel (Ultimate Rewards)", "spendBonusCategoryId": 605645987 }
              ]
            },
            {
              "spendBonusSubcategoryGroup": "All Airfare",
              "spendBonusCategory": [
                { "spendBonusCategoryName": "Airfare", "spendBonusCategoryId": 2013874334 }
              ]
            },
            {
              "spendBonusSubcategoryGroup": "Travel Agency",
              "spendBonusCategory": [
                { "spendBonusCategoryName": "All Travel (Ultimate Rewards)", "spendBonusCategoryId": 605657763 }
              ]
            },
            {
              "spendBonusSubcategoryGroup": "Car Rental",
              "spendBonusCategory": [
                { "spendBonusCategoryName": "Car Rentals", "spendBonusCategoryId": 1766781107 }
              ]
            },
            {
              "spendBonusSubcategoryGroup": "Travel Agency - Car Rental",
              "spendBonusCategory": [
                { "spendBonusCategoryName": "Car Rentals (Ultimate Rewards)", "spendBonusCategoryId": 1086445664 }
              ]
            },
            {
              "spendBonusSubcategoryGroup": "Hotel",
              "spendBonusCategory": [
                { "spendBonusCategoryName": "Hotels", "spendBonusCategoryId": 164006704 },
                { "spendBonusCategoryName": "Hyatt", "spendBonusCategoryId": 10478769 },
                { "spendBonusCategoryName": "IHG Hotels & Resorts", "spendBonusCategoryId": 1342938109 },
                { "spendBonusCategoryName": "Marriott", "spendBonusCategoryId": 661059256 }
              ]
            },
            {
              "spendBonusSubcategoryGroup": "Travel Agency - Hotel",
              "spendBonusCategory": [
                { "spendBonusCategoryName": "Hotels (Ultimate Rewards)", "spendBonusCategoryId": 948306327 }
              ]
            },
            {
              "spendBonusSubcategoryGroup": "Rideshare",
              "spendBonusCategory": [
                { "spendBonusCategoryName": "Lyft", "spendBonusCategoryId": 606097 },
                { "spendBonusCategoryName": "Ridesharing", "spendBonusCategoryId": 1982334500 }
              ]
            },
            {
              "spendBonusSubcategoryGroup": "Transportation",
              "spendBonusCategory": [
                { "spendBonusCategoryName": "Tolls", "spendBonusCategoryId": 11030576 },
                { "spendBonusCategoryName": "Transit", "spendBonusCategoryId": 1468589631 }
              ]
            },
            {
              "spendBonusSubcategoryGroup": "All Travel",
              "spendBonusCategory": [
                { "spendBonusCategoryName": "Travel", "spendBonusCategoryId": 176638649 }
              ]
            }
          ]
        },
        {
          "spendBonusCategoryGroup": "Shopping",
          "spendBonusSubcategoryGroup": [
            {
              "spendBonusSubcategoryGroup": "Shopping Portal",
              "spendBonusCategory": [
                { "spendBonusCategoryName": "Amazon", "spendBonusCategoryId": 141708891 }
              ]
            },
            {
              "spendBonusSubcategoryGroup": "All Drugstores",
              "spendBonusCategory": [
                { "spendBonusCategoryName": "Drugstores", "spendBonusCategoryId": 1096261883 }
              ]
            },
            {
              "spendBonusSubcategoryGroup": "Grocery",
              "spendBonusCategory": [
                { "spendBonusCategoryName": "Grocery Delivery", "spendBonusCategoryId": 1962751737 },
                { "spendBonusCategoryName": "Grocery Stores", "spendBonusCategoryId": 1214295407 }
              ]
            },
            {
              "spendBonusSubcategoryGroup": "Wholesale",
              "spendBonusCategory": [
                { "spendBonusCategoryName": "Costco", "spendBonusCategoryId": 394343413 },
                { "spendBonusCategoryName": "Wholesale Clubs", "spendBonusCategoryId": 2050458769 }
              ]
            }
          ]
        }
      ];

      await addCards(cards);
      await addCardEarnRates(cardEarnRates);
      await addSpendBonusCategoryGroups(spendBonusCategoryGroups);

      Alert.alert('Success', 'Data uploaded successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to upload data');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Upload Data" onPress={handleUpload} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DataUpload;
