import { View, Text } from '@tarojs/components'
import { ExamLevel } from '../utils/examLevel'

interface MainTitleCardProps {
  level: ExamLevel
  subtitle?: string
  onPredict?: () => void
}

export default function MainTitleCard({ level, subtitle, onPredict }: MainTitleCardProps) {
  return (
    <View className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 mx-4 my-4 shadow-lg">
      <View className="flex items-center gap-2 mb-2">
        <Text className="text-4xl font-bold text-white">{level}</Text>
        <Text className="text-yellow-300 text-xl">🎓</Text>
      </View>
      {subtitle && (
        <Text className="text-white text-sm mb-6 opacity-90">{subtitle}</Text>
      )}
      <View
        className="bg-purple-700 text-white rounded-xl py-3 px-4 flex items-center justify-center gap-2 active:opacity-80"
        onClick={onPredict}
      >
        <Text className="text-lg">💡</Text>
        <Text className="text-white font-medium">
          精准预测你的{level === ExamLevel.CET4 ? '四级' : '六级'}分数
        </Text>
      </View>
    </View>
  )
}

