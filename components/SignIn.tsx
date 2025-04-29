"use client"

import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, Pressable, Alert, Image, Platform } from "react-native"
import { ArrowLeft } from "lucide-react-native"
import { useNavigation } from "@react-navigation/native"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"
import type { RootStackParamList } from "../App"
import FAIcon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SafeAreaView } from "react-native-safe-area-context"
import { useWindowDimensions } from "react-native"

type SignInScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "SignIn">

interface SignInProps {
    onSignIn?: (data: { email: string; password: string }) => Promise<void>
}

export default function SignIn() {
    const navigation = useNavigation<SignInScreenNavigationProp>()
    const [showPassword, setShowPassword] = useState(false)
    const [rememberMe, setRememberMe] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const { width } = useWindowDimensions()
    const isDesktop = Platform.OS === 'web' && width > 768


    return (
        <SafeAreaView className="flex-1 ">
            <View className={`flex-1 bg-white ${isDesktop ? 'px-0 h-full' : 'px-6 pt-16'} h-full`}>


                {/* Desktop Layout */}
                <View className={`${isDesktop ? 'flex-row items-center justify-between flex-1 ' : ''}`}>
                    {/* Logo */}
                    <View className={`${isDesktop ? 'w-1/2 flex items-center justify-center' : 'flex items-center justify-center mb-6'}`}>
                        <Image
                            source={require('../assets/logo.png')}
                            style={{
                                width: isDesktop ? Math.min(width * 0.3, 200) : 150,
                                height: isDesktop ? Math.min(width * 0.3, 200) : 150
                            }}
                        />
                    </View>

                    {/* Form container */}
                    <View className={`${isDesktop ? 'w-1/2 px-8 ' : 'w-full'}`}>
                        <View>

                            <View className="space-y-4">




                                {/* Form container */}

                                <Text className="text-2xl font-bold text-center mb-8">Login to Your Account</Text>

                                <View className="flex-col flex gap-4 ">


                                    {/* Email field */}
                                    <View className="relative">
                                        <View className="absolute left-4 top-4 z-10">
                                            <AntDesign name="mail" size={20} color="#000" />
                                        </View>
                                        <TextInput
                                            placeholder="Email"
                                            keyboardType="email-address"
                                            autoCapitalize="none"
                                            className="w-full py-4 pl-12 pr-4 bg-gray-100 rounded-lg text-black"
                                            placeholderTextColor="#9ca3af"
                                        />
                                    </View>

                                    {/* Password field */}
                                    <View className="relative">
                                        <View className="absolute left-4 top-4 z-10">
                                            <FAIcon name="lock" size={20} color="#000" />
                                        </View>
                                        <TextInput
                                            placeholder="Password"
                                            secureTextEntry={!showPassword}
                                            className="w-full py-4 pl-12 pr-12 bg-gray-100 rounded-lg text-black"
                                            placeholderTextColor="#9ca3af"
                                        />
                                        <TouchableOpacity
                                            className="absolute right-4 top-4"
                                            onPress={() => setShowPassword(!showPassword)}
                                        />
                                    </View>

                                    {/* Sign up button */}
                                    <TouchableOpacity className="w-full py-4 rounded-full items-center bg-blue-500">
                                        <Text className="text-white font-medium">Sign In</Text>
                                    </TouchableOpacity>
                                </View>

                                {/* Social login */}
                                <View className={`mt-4 ${isDesktop ? 'max-w-md mx-auto' : ''}`}>
                                    <View className="flex-row items-center my-6">
                                        <View className="flex-1 border-b border-gray-300" />
                                        <Text className="mx-4 text-center text-gray-500">or sign up with</Text>
                                        <View className="flex-1 border-b border-gray-300" />
                                    </View>
                                    <View className="flex-row justify-center space-x-4">
                                        <TouchableOpacity className="w-16 h-16 mx-4 rounded-lg border border-gray-200 items-center justify-center">
                                            <FAIcon name="google" size={24} color="#000" />
                                        </TouchableOpacity>
                                        <TouchableOpacity className="w-16 h-16 mx-4 rounded-lg border border-gray-200 items-center justify-center">
                                            <FAIcon name="linkedin" size={24} color="#000" />
                                        </TouchableOpacity>
                                        <TouchableOpacity className="w-16 h-16 mx-4 rounded-lg border border-gray-200 items-center justify-center">
                                            <FAIcon name="github" size={24} color="#000" />
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                {/* Sign in link */}
                                <View className={`mt-8 items-center ${isDesktop ? 'max-w-md mx-auto' : ''}`}>
                                    <Text className="text-gray-400 text-sm">
                                        Already have an account?{" "}
                                        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                                            <Text className="text-blue-500 font-bold">Sign Up</Text>
                                        </TouchableOpacity>
                                    </Text>
                                </View>
                            </View>


                        </View>

                        {/* Social login and Sign up link sections remain the same */}
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
