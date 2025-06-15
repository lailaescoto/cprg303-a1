import { FontAwesome } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View } from 'react-native';


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
        <Text style={styles.name}>John</Text>
        <Text style={styles.handle}>@JohnDoe</Text>
      </View>

      {/* Bio */}
      <Text style={styles.bio}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      </Text>

      {/* Stats */}
      <View style={styles.statsContainer}>

        {/* Joined Date */}
        <View style={styles.joinedContainer}>
          <FontAwesome name="calendar" size={16} color="#aaa" />
          <Text style={styles.joinedText}> Joined October 2009</Text>
        </View>

        <View style={styles.statsRow}>
          <Text style={styles.statNumber}>699 </Text>
          <Text style={styles.statLabel}>Following</Text>

          <Text style={[styles.statNumber, { marginLeft: 16 }]}>575.3K </Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
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
  },
  bio: {
    color: '#fff',
    marginLeft: 16,
    marginTop: 12,
    fontSize: 15,
    marginRight: 16,
  },
  joinedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    marginLeft: 3,
  },
  joinedText: {
    color: '#aaa',
    fontSize: 14,
    marginLeft: 6,
  },
  statsContainer: {
    marginLeft: 16,
    marginTop: 16,
  },
  statsRow: {
    flexDirection: 'row',
    marginLeft: 3,
  },
  stat: {
    marginRight: 24,
  },
  statNumber: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  statLabel: {
    color: '#aaa',
    fontSize: 14,
  }
})