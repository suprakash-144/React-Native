import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {object, number} from 'yup';
import {Formik} from 'formik';

let PassSchema = object({
  passwordlen: number().required('Required ').min(4).max(16),
});
export default function App(): JSX.Element {
  const [password, setpassword] = useState('');
  const [ispasswordgenerated, setispasswordgenerated] = useState(false);
  const [lowercase, setlowercase] = useState(true);
  const [uppercase, setuppercase] = useState(false);
  const [special, setspecial] = useState(false);
  const resetpassword = () => {
    setpassword('');
    setispasswordgenerated(false);
  };
  const createpassword = (passwordlength: number) => {
    const lowercasecharacter = 'abcdefghijklmnopqrstuvwxyz';
    const uppercasecharacter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const specialcharacte = '@#$%^_*&';
    let characters = '';
    if (lowercase) {
      characters += lowercasecharacter;
    }
    if (uppercase) {
      characters += uppercasecharacter;
    }
    if (special) {
      characters += specialcharacte;
    }
    let pass = generatepassword(passwordlength, characters);
    setpassword(pass);
    setispasswordgenerated(true);
  };
  const generatepassword = (
    _passlength: number,
    characters: string,
  ): string => {
    let result = '';
    for (let index = 0; index < _passlength; index++) {
      const randindex = Math.round(Math.random() * characters.length);
      result += characters.charAt(randindex);
    }
    return result;
  };
  return (
    <ScrollView keyboardShouldPersistTaps={'handled'}>
      <SafeAreaView>
        <View style={styles.container}>
          <View>
            <Formik
              initialValues={{passwordlen: ''}}
              validationSchema={PassSchema}
              onSubmit={values => {
                createpassword(+values.passwordlen);
              }}>
              {({
                values,
                errors,
                touched,
                handleChange,
                isValid,
                handleSubmit,
                handleReset,
              }) => (
                <>
                  <View style={[styles.wrapper]}>
                    <View style={{flex: 1}}>
                      <Text style={[styles.text]}>Enter Password Length: </Text>
                      {touched.passwordlen && errors.passwordlen && (
                        <Text style={{color: 'red'}}>{errors.passwordlen}</Text>
                      )}
                    </View>
                    <TextInput
                      style={[styles.field]}
                      value={values.passwordlen}
                      onChangeText={handleChange('passwordlen')}
                      keyboardType="numeric"
                      placeholder="Ex. 8"
                      placeholderTextColor={'black'}
                    />
                  </View>
                  <View style={[styles.wrapper]}>
                    <Text style={[styles.text]}>Include Lowercase: </Text>

                    <BouncyCheckbox
                      size={25}
                      isChecked={lowercase}
                      // disableBuiltInState'
                      fillColor="#29AB87"
                      unfillColor="#FFFFFF"
                      onPress={() => setlowercase(!lowercase)}
                    />
                  </View>
                  <View style={[styles.wrapper]}>
                    <Text style={[styles.text]}>Include Uppercase: </Text>
                    <BouncyCheckbox
                      size={25}
                      isChecked={uppercase}
                      fillColor="red"
                      unfillColor="#FFFFFF"
                      onPress={() => setuppercase(!uppercase)}
                    />
                  </View>
                  <View style={[styles.wrapper]}>
                    <Text style={[styles.text]}>
                      Include Special characters:{' '}
                    </Text>
                    <BouncyCheckbox
                      isChecked={special}
                      size={25}
                      fillColor="red"
                      unfillColor="#FFFFFF"
                      onPress={() => setspecial(!special)}
                    />
                  </View>
                  <View style={styles.buttonwrapper}>
                    <TouchableOpacity
                      disabled={!isValid}
                      onPress={handleSubmit}>
                      <Text style={styles.button}>Generate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        handleReset();
                        resetpassword();
                      }}>
                      <Text style={styles.button}>Reset</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </Formik>
          </View>
          {ispasswordgenerated && (
            <View style={styles.passwordswrapper}>
              <View>
                <Text style={[styles.text]}>Generated password</Text>
              </View>
              <View>
                <Text
                  selectable={true}
                  style={[styles.text]}>{`${password}`}</Text>
              </View>
            </View>
          )}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {margin: 12, paddingVertical: 8},
  text: {fontSize: 18, color: 'black'},
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
  },
  buttonwrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 8,
  },
  field: {
    padding: 6,
    fontSize: 20,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'black',
    color: 'black',
    borderRadius: 6,
    // elevation: ,
    // shadowColor: 'red',
    // shadowOffset: {width: 5, height: 5},
    // shadowRadius: 10,
  },
  button: {
    borderColor: 'red',
    borderRadius: 8,
    backgroundColor: 'yellow',
    padding: 10,
    color: 'red',
  },
  passwordswrapper: {
    flex: 1,
    borderRadius: 10,
    marginVertical: 28,
    paddingVertical: 20,
    backgroundColor: 'beige',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
