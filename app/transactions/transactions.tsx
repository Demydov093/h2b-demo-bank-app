import { Link } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

const Transactions = () => {
  return (
    <View>
      <Link href={"/transactions/success"}>Success</Link>
    </View>
  )
}

export default Transactions