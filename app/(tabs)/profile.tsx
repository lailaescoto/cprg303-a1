import { FontAwesome } from '@expo/vector-icons';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const ProfileScreen = () => {
  return (    
    <View>

    <View style={styles.header}>
      <Text style={styles.backButton}>{'<'}</Text>
      <View>
        <Text style={styles.headerName}>Jane</Text>
        <Text style={styles.headerSub}>1 post</Text>
      </View>
    </View>


    {/* Banner / Header Image */}
      <Image
        source={{ uri: 'https://i.pravatar.cc/800?img=20' }}
        style={styles.banner}
      />


      {/* Profile Picture */}
      <View style={styles.profilePicContainer}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/40?img=10' }}
          style={styles.profilePic}
        />

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.iconButtonText}>...</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.buttonText}>Follow</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Name and Handle */}
      <View style={styles.nameHandle}>
        <Text style={styles.name}>Jane</Text>
        <Text style={styles.handle}>@JaneDoe</Text>
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

      <View style={styles.profileTabs}>
        <Text style={[styles.profileTab, styles.activeProfileTab]}>Tweets</Text>
        <Text style={styles.profileTab}>Media</Text>
        <Text style={styles.profileTab}>Likes</Text>
      </View>

      <View style={styles.tweet}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/40?img=10' }}
          style={styles.tweetImage}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.tweetName}>
            Jane <Text style={styles.tweetHandle}>@JaneDoe · 1h</Text>
          </Text>
          <Text style={styles.tweetText}>
            This is my first post on X.
          </Text>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 20,
    backgroundColor: '#000',
    borderBottomColor: '#222',
    borderBottomWidth: 1,
  },
  backButton: {
    fontSize: 24,
    color: '#fff',
    marginRight: 20,
  },
  headerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerSub: {
    fontSize: 14,
    color: '#aaa',
  },
  banner: {
    width: '100%',
    height: 140,
  },
  profilePicContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -10,
    paddingHorizontal: 16,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginRight: 8,
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 999,
    padding: 8,
  },
  iconButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  actionButton: {
    backgroundColor: '#fff',
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  nameHandle: {
    marginTop: 20,
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
  },
  profileTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: '#222',
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginTop: 16,
  },
  profileTab: {
    color: '#888',
    fontSize: 16,
  },
  activeProfileTab: {
    color: '#fff',
    fontWeight: 'bold',
    borderBottomColor: '#1DA1F2',
    borderBottomWidth: 2,
  },
  tweet: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
    borderBottomColor: '#222',
    borderBottomWidth: 1,
  },
  tweetImage: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 12,
  },
  tweetName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  tweetHandle: {
    fontWeight: 'normal',
    color: '#aaa',
  },
  tweetText: {
    color: '#fff',
    marginTop: 4,
    fontSize: 15,
  },
})