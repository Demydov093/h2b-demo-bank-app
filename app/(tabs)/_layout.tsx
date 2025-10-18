import { Tabs } from 'expo-router';
import { HomeIcon, UserPlusIcon } from 'react-native-heroicons/outline';

const _Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          headerShown: false,
          tabBarIcon: ({ color, size }) => <HomeIcon color={color} size={28} />,
          tabBarStyle: { paddingTop: 0 },
        }}
      />
      <Tabs.Screen
        name="refferal"
        options={{
          title: 'Refferal',
          headerShown: false,
          tabBarIcon: ({ color, size }) => <UserPlusIcon color={color} size={28} />,
          tabBarStyle: { paddingTop: 0 },
        }}
      />
    </Tabs>
  );
};

export default _Layout;
