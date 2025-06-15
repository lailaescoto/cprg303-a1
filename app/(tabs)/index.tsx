import React from 'react';
import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const tweets = [
  {
    id: '1',
    name: 'DogeDesigner',
    handle: '@cb_doge',
    text: 'This is my first post on X\nHello world.',
    time: '1h',
    profileImage: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: '2',
    name: 'Michael Daly',
    handle: '@drmikeDO1943',
    text: "A grandson just texted: How is X? Why do you think it’s newsworthy? My answer: It's a panoply of views/comments...",
    time: '3h',
    profileImage: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: '3',
    name: 'Asmaa | أسماء',
    handle: '@ALadyInKuwait',
    text: '10.31 pm here.\nBefore we bid the night farewell.',
    time: '1h',
    profileImage: 'https://i.pravatar.cc/150?img=8',
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/40?img=10' }}
          style={styles.profileImage}
        />
        <Text style={styles.logo}>X</Text>
        <View style={{ width: 40 }} /> {/* Spacer */}
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <Text style={[styles.tab, styles.activeTab]}>For you</Text>
        <Text style={styles.tab}>Following</Text>
        <Text style={styles.tab}>Subscribed</Text>
      </View>

      {/* Tweets */}
      <FlatList
        data={tweets}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => (
          <View style={styles.tweet}>
            <Image source={{ uri: item.profileImage }} style={styles.tweetImage} />
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>
                {item.name}{' '}
                <Text style={styles.handle}>
                  {item.handle} · {item.time}
                </Text>
              </Text>
              <Text style={styles.text}>{item.text}</Text>
            </View>
          </View>
        )}
      />

      {/* Alert Button */}
      <TouchableOpacity
        style={styles.alertBtn}
        onPress={() => Alert.alert('Alert Button pressed')}
      >
        <Text style={styles.alertText}>Alert</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  logo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: '#333',
    borderBottomWidth: 1,
    paddingBottom: 8,
  },
  tab: {
    color: '#888',
    fontSize: 16,
  },
  activeTab: {
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
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  handle: {
    fontWeight: 'normal',
    color: '#aaa',
  },
  text: {
    color: '#fff',
    marginTop: 4,
    fontSize: 15,
  },
  alertBtn: {
    position: 'absolute',
    bottom: 80,
    alignSelf: 'center',
    backgroundColor: '#1DA1F2',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  alertText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
