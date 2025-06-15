import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MessagesScreen = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.backButton}>{'<'}</Text>
        <Text style={styles.headerTitle}>Messages</Text>
      <View style={{ width: 24 }} />
    </View>
    </View>
  )
}

export default MessagesScreen

const styles = StyleSheet.create({
    header: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: 50,
  paddingHorizontal: 16,
  paddingBottom: 15,
  borderBottomColor: '#222',
  borderBottomWidth: 1,
  backgroundColor: '#000',
},

backButton: {
  fontSize: 24,
  color: '#fff',
},

headerTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#fff',
},

})