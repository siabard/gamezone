import React from 'react';
import {Formik} from 'formik';
import {Button, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import * as yup from 'yup';
import FlatButton from '../components/FlatButton';
import {ReviewType} from '../types/ReviewType';

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .number()
    .required()
    .test(
      'is-num-1-5',
      'Rating must be a number 1 - 5',
      (val: number | undefined) => {
        return val ? val < 6 && val > 0 : false;
      },
    ),
});

const ReviewForm = ({addReview}: {addReview: (values: ReviewType) => void}) => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{title: '', body: '', rating: ''}}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview({...values, rating: parseInt(values.rating)});
        }}>
        {props => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Review title"
              onChangeText={props.handleChange('title')}
              value={props.values.title}
              onBlur={props.handleBlur('title')}
            />
            <Text style={styles.errorText}>
              {props.touched.title && props.errors.title}
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Review body"
              onChangeText={props.handleChange('body')}
              value={props.values.body}
              onBlur={props.handleBlur('body')}
            />
            <Text style={styles.errorText}>
              {props.touched.body && props.errors.body}
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Review (1-5)"
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType="numeric"
              onBlur={props.handleBlur('rating')}
            />
            <Text style={styles.errorText}>
              {props.touched.rating && props.errors.rating}
            </Text>
            <FlatButton text="submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadium: 6,
  },
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 6,
    textAlign: 'center',
  },
});
export default ReviewForm;
