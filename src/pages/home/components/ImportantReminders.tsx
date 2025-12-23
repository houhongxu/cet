import { View, Text } from "@tarojs/components";
import Card from "./Card";

export default function ImportantReminders() {
  const reminders = ["此统计样本不能代表常模真实正确率,仅供参考。"];

  return (
    <Card title="重要提醒" icon="⚠️" bgColor="bg-yellow-50">
      <View className="space-y-2">
        {reminders.map((reminder, index) => (
          <View key={index} className="flex items-start gap-2">
            <Text className="text-gray-700 text-sm leading-relaxed">
              {index + 1}. {reminder}
            </Text>
          </View>
        ))}
      </View>
    </Card>
  );
}
