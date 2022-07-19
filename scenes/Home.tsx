import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  Button,
  FlatList,
  Keyboard,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Card from '../components/Card';
import {ReviewType} from '../types/ReviewType';
import {RootStackParamList} from '../types/StackParamList';
import ReviewForm from './ReviewForm';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: Props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const [reviews, setReviews] = useState<ReviewType[]>([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 5,
      body: 'lorem ipsum',
      key: '1',
    },
    {
      title: 'Gotta catch Them All (Again)',
      rating: 3,
      body: 'lorem ipsum',
      key: '2',
    },
    {title: 'Not so "Final" Fantasy', rating: 5, body: 'lorem ipsum', key: '3'},
  ]);

  const pressHandler = (param: ReviewType) => {
    navigation.navigate('ReviewDetails', param);
  };

  const addReview = (review: ReviewType) => {
    review.key = Math.random().toString();
    setReviews(currentReviews => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
  };

  return (
    <View style={styles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <Icon
              name="close"
              size={24}
              style={{...styles.modalToggle, ...styles.modalClose}}
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Icon
        name="addfile"
        style={styles.modalToggle}
        size={24}
        onPress={() => setModalOpen(true)}
      />

      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => pressHandler(item)}>
            <Card>
              <Text style={styles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  titleText: {
    fontFamily: 'D2Coding',
    fontSize: 18,
  },
  modalContent: {
    flex: 1,
  },
  modalToggle: {
    marginBottom: 10,
    borderWidht: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadium: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
});

export default Home;
