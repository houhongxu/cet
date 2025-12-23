import { View, Text } from "@tarojs/components";
import { ExamLevel } from "../utils/examLevel";

interface ResultDisplayProps {
  level: ExamLevel;
  listeningPaper: string;
  readingPaper: string;
  writingScore: number;
  listeningScore: number;
  readingScore: number;
  totalScore: number;
}

export default function ResultDisplay({
  level,
  listeningPaper,
  readingPaper,
  writingScore,
  listeningScore,
  readingScore,
  totalScore,
}: ResultDisplayProps) {
  return (
    <View className="mx-4 my-4">
      <View className="flex items-center gap-2 mb-4">
        <Text className="text-green-500 text-lg">📊</Text>
        <Text className="font-bold text-gray-800">
          {level === ExamLevel.CET4 ? "四级" : "六级"}估分结果
        </Text>
      </View>

      {/* 选择的试卷信息 */}
      <View
        className="rounded-2xl p-4 mb-4 shadow-lg"
        style={{
          background: "linear-gradient(to bottom right, #a855f7, #ec4899)",
        }}
      >
        <View className="flex items-center gap-2 mb-3">
          <Text className="text-lg">📁</Text>
          <Text className="text-white font-medium">你选择的试卷:</Text>
        </View>
        <View className="flex flex-col gap-2">
          <View className="flex items-center gap-2">
            <Text className="text-red-300">🎯</Text>
            <Text className="text-white">
              等级: {level === ExamLevel.CET4 ? "英语四级" : "英语六级"}
            </Text>
          </View>
          <View className="flex items-center gap-2">
            <Text className="text-gray-300">🎧</Text>
            <Text className="text-white">听力: {listeningPaper}</Text>
          </View>
          <View className="flex items-center gap-2">
            <Text className="text-green-300">📚</Text>
            <Text className="text-white">阅读: {readingPaper}</Text>
          </View>
        </View>
      </View>

      {/* 各部分得分 */}
      <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
        <View className="flex flex-col gap-3">
          <View className="flex items-center justify-between">
            <View className="flex items-center gap-2">
              <Text className="text-lg">✍️</Text>
              <Text className="text-gray-700">写译得分</Text>
            </View>
            <Text className="text-green-500 font-bold text-lg">
              {writingScore}分
            </Text>
          </View>
          <View className="flex items-center justify-between">
            <View className="flex items-center gap-2">
              <Text className="text-lg">🎧</Text>
              <Text className="text-gray-700">听力得分</Text>
            </View>
            <Text className="text-green-500 font-bold text-lg">
              {listeningScore}分
            </Text>
          </View>
          <View className="flex items-center justify-between">
            <View className="flex items-center gap-2">
              <Text className="text-lg">📚</Text>
              <Text className="text-gray-700">阅读得分</Text>
            </View>
            <Text className="text-green-500 font-bold text-lg">
              {readingScore}分
            </Text>
          </View>
        </View>
      </View>

      {/* 预估总分 */}
      <View
        className="rounded-2xl p-4 mb-4 shadow-lg"
        style={{
          background: "linear-gradient(to bottom right, #a855f7, #ec4899)",
        }}
      >
        <View className="flex items-center justify-between">
          <View className="flex items-center gap-2">
            <Text className="text-red-300 text-lg">🎯</Text>
            <Text className="text-white font-medium text-lg">预估总分</Text>
          </View>
          <Text className="text-white font-bold text-3xl">{totalScore}分</Text>
        </View>
      </View>

      {/* 通过/不通过状态 */}
      {totalScore >= 425 ? (
        <View
          className="text-white rounded-2xl py-4 px-4 flex items-center justify-center gap-2 shadow-lg"
          style={{
            background: "linear-gradient(to right, #4ade80, #16a34a)",
          }}
        >
          <Text className="text-lg">🎉</Text>
          <Text className="text-white font-bold text-lg">恭喜通过！</Text>
        </View>
      ) : (
        <View
          className="text-white rounded-2xl py-4 px-4 flex items-center justify-center gap-2 shadow-lg"
          style={{
            background: "linear-gradient(to right, #9ca3af, #4b5563)",
          }}
        >
          <Text className="text-lg">😔</Text>
          <Text className="text-white font-bold text-lg">
            未通过（425分通过）
          </Text>
        </View>
      )}
    </View>
  );
}
