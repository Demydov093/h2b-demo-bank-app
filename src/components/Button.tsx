import { ReactNode } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';

type ButtonProps = {
  text: string;
  icon?: ReactNode;
  onPress?: () => void;
  height?: number;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
};

export default function Button({
  text,
  icon,
  onPress,
  height,
  className = '',
  loading = false,
  disabled = false,
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      testID="button-touchable"
      accessible
      accessibilityState={{ disabled: isDisabled }}
      onPress={onPress}
      disabled={isDisabled}
      className={`${className} flex-row items-center justify-center rounded-2xl px-4 ${
        isDisabled ? 'bg-gray-300' : 'bg-black'
      }`}
      style={{ height: height || 48 }}
    >
      {loading ? (
        <ActivityIndicator testID="activity-indicator" color="#C9FF08" size={35} />
      ) : (
        <>
          {icon && <View className="mr-2">{icon}</View>}
          <Text className="text-white text-base font-semibold">{text}</Text>
        </>
      )}
    </TouchableOpacity>
  );
}
