import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { useAuth } from '../../hooks/AuthContext';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: '#fff', fontSize: 20 }}>Dashboard</Text>
      <TouchableOpacity onPress={signOut}>
        <Text style={{ color: '#ff9000', fontSize: 20 }}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
