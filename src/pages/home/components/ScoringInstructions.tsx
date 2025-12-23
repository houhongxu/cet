import { View, Text } from "@tarojs/components";
import Card from "./Card";

export default function ScoringInstructions() {
  const reminders = [
    "写译,四级正常水平按照17分来算,六级正常水平按照15分来算。",
    "听力,1-15按照一题1分,16-25按照一题2分,12选10按照一题1分。",
    "阅读,选词填空按照一题0.5分,仔细阅读按照一题2分。",
  ];

  return (
    <Card title="小分说明" icon="📋" bgColor="bg-pink-50">
      <View className="flex flex-col gap-2">
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
