import { Image, StyleSheet, Text, View } from 'react-native'

const ProfileScreen = () => {
  return (
    <View>
    {/* Banner / Header Image */}
      <Image
        source={{ uri: 'https://i.pravatar.cc/800?img=12' }}
        style={styles.banner}
      />

      {/* Profile Picture */}
      <View style={styles.profilePicContainer}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=4' }}
          style={styles.profilePic}
        />
      </View>
      
      {/* Name and Handle */}
      <View style={styles.nameHandle}>
        <Text style={styles.name}>Wikipedia</Text>
        <Text style={styles.handle}>@Wikipedia</Text>
      </View>
      
      </View>
      
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#000',
  },
  banner: {
    width: '100%',
    height: 140,
  },
  profilePicContainer: {
    position: 'absolute',
    top: 90,
    left: 16,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#000',
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  nameHandle: {
    marginTop: 60,
    marginLeft: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  handle: {
    fontSize: 16,
    color: '#aaa',
    marginTop: 4,
  }
})