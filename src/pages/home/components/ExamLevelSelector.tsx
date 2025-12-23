import { View, Text } from "@tarojs/components";
import { ExamLevel } from "../utils/examLevel";
import Card from "./Card";

interface ExamLevelSelectorProps {
  selectedLevel: ExamLevel;
  onLevelChange: (level: ExamLevel) => void;
}

export default function ExamLevelSelector({
  selectedLevel,
  onLevelChange,
}: ExamLevelSelectorProps) {
  return (
    <Card title="选择考试等级" icon="🎯">
      <View className="flex gap-3">
        <View
          className={`flex-1 rounded-xl py-3 px-4 flex items-center gap-2 active:opacity-80 ${
            selectedLevel === ExamLevel.CET4
              ? "text-white"
              : "bg-gray-50 border-2 border-gray-300 text-gray-700"
          }`}
          style={
            selectedLevel === ExamLevel.CET4
              ? {
                  background: "linear-gradient(to right, #a855f7, #ec4899)",
                }
              : undefined
          }
          onClick={() => onLevelChange(ExamLevel.CET4)}
        >
          {selectedLevel === ExamLevel.CET4 ? (
            <Text className="text-white">✓</Text>
          ) : (
            <View className="w-4 h-4 border-2 border-gray-400 rounded-full"></View>
          )}

          <View className="flex flex-col">
            <Text
              className={
                selectedLevel === ExamLevel.CET4
                  ? "text-white font-medium text-sm"
                  : "text-gray-700 font-medium text-sm"
              }
            >
              英语四级
            </Text>
            <Text
              className={
                selectedLevel === ExamLevel.CET4
                  ? "text-white font-medium text-sm"
                  : "text-gray-700 font-medium text-sm"
              }
            >
              CET-4
            </Text>
          </View>
        </View>
        <View
          className={`flex-1 rounded-xl py-3 px-4 flex items-center gap-2 active:opacity-80 ${
            selectedLevel === ExamLevel.CET6
              ? "text-white"
              : "bg-gray-50 border-2 border-gray-300 text-gray-700"
          }`}
          style={
            selectedLevel === ExamLevel.CET6
              ? {
                  background: "linear-gradient(to right, #a855f7, #ec4899)",
                }
              : undefined
          }
          onClick={() => onLevelChange(ExamLevel.CET6)}
        >
          {selectedLevel === ExamLevel.CET6 ? (
            <Text className="text-white">✓</Text>
          ) : (
            <View className="w-4 h-4 border-2 border-gray-400 rounded-full"></View>
          )}
          <View className="flex flex-col">
            <Text
              className={
                selectedLevel === ExamLevel.CET6
                  ? "text-white font-medium text-sm"
                  : "text-gray-700 font-medium text-sm"
              }
            >
              英语六级
            </Text>{" "}
            <Text
              className={
                selectedLevel === ExamLevel.CET6
                  ? "text-white font-medium text-sm"
                  : "text-gray-700 font-medium text-sm"
              }
            >
              CET-6
            </Text>
          </View>
        </View>
      </View>
    </Card>
  );
}
