import { View, Text } from "@tarojs/components";

export default function Header() {
  return (
    <View className="bg-gradient-to-r from-purple-400 to-purple-600 px-4 py-3 flex items-center justify-between">
      <Text className="text-white text-lg font-semibold">四六级估分系统</Text>
    </View>
  );
}
