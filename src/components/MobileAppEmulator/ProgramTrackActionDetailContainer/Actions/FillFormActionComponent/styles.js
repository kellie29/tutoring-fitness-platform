// @flow

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  field: {
    marginTop: 8,
    marginBottom: 16,
  },
  radioButtonContainer: {
    backgroundColor: 'white',
  },
  radioButtonText: {
    position: 'absolute',
    left: 36,
    top: 9,
  },
  image: {
    resizeMode: 'contain',
  },
  selectImageButtonText: {
    fontSize: 18,
    marginBottom: 24,
  },
  inputAsText: {
    borderRadius: 13,
    borderWidth: 1,
    marginTop: 8,
    height: 49,
    paddingHorizontal: 12,
    fontFamily: 'Nunito',
    fontSize: 14,
    fontWeight: '100',
    color: '#78849E',
  },
  scaleLabelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 18,
    marginVertical: 8,
  },
  scaleLabel: {
    fontSize: 16,
    alignSelf: 'center',
  },
  scaleResponseText: {
    fontSize: 18,
    textAlign: 'center',
  },
  scaleSlider: {
    marginHorizontal: 12,
  },
  dateTimeTextInputContainer: {
    height: 75,
  },
});
