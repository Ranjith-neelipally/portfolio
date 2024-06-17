import { useSelector } from "react-redux";
import { ThemeInterFace } from "../../Store/Types/Theme";
import { RootState } from "../../Store/Provider";

interface ColorScheme {
  primary: string;
  surfaceTint: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  secondary: string;
  onSecondary: string;
  secondaryContainer: string;
  onSecondaryContainer: string;
  tertiary: string;
  onTertiary: string;
  tertiaryContainer: string;
  onTertiaryContainer: string;
  error: string;
  onError: string;
  errorContainer: string;
  onErrorContainer: string;
  background: string;
  onBackground: string;
  surface: string;
  onSurface: string;
  surfaceVariant: string;
  onSurfaceVariant: string;
  outline: string;
  outlineVariant: string;
  shadow: string;
  scrim: string;
  inverseSurface: string;
  inverseOnSurface: string;
  inversePrimary: string;
  primaryFixed: string;
  onPrimaryFixed: string;
  primaryFixedDim: string;
  onPrimaryFixedVariant: string;
  secondaryFixed: string;
  onSecondaryFixed: string;
  secondaryFixedDim: string;
  onSecondaryFixedVariant: string;
  tertiaryFixed: string;
  onTertiaryFixed: string;
  tertiaryFixedDim: string;
  onTertiaryFixedVariant: string;
  surfaceDim: string;
  surfaceBright: string;
  surfaceContainerLowest: string;
  surfaceContainerLow: string;
  surfaceContainer: string;
  surfaceContainerHigh: string;
  surfaceContainerHighest: string;
}

const theme: ThemeInterFace = useSelector((state: RootState) => state.Theme);
console.log(theme, "theme");

const getColorScheme = (theme: "light" | "dark"): ColorScheme => ({
  primary: theme === "light" ? "#626117" : "#CCCB75",
  surfaceTint: theme === "light" ? "#626117" : "#CCCB75",
  onPrimary: theme === "light" ? "#FFFFFF" : "#333200",
  primaryContainer: theme === "light" ? "#E9E78F" : "#4A4900",
  onPrimaryContainer: theme === "light" ? "#1D1D00" : "#E9E78F",
  secondary: theme === "light" ? "#616042" : "#CBC8A4",
  onSecondary: theme === "light" ? "#FFFFFF" : "#323218",
  secondaryContainer: theme === "light" ? "#E9E78F" : "#49482D",
  onSecondaryContainer: theme === "light" ? "#1D1D06" : "#E7E4BF",
  tertiary: theme === "light" ? "#3E6656" : "#A4D0BC",
  onTertiary: theme === "light" ? "#FFFFFF" : "#0B3729",
  tertiaryContainer: theme === "light" ? "#C0ECD8" : "#254E3F",
  onTertiaryContainer: theme === "light" ? "#002116" : "#C0ECD8",
  error: theme === "light" ? "#BA1A1A" : "#FFB4AB",
  onError: theme === "light" ? "#FFFFFF" : "#690005",
  errorContainer: theme === "light" ? "#FFDAD6" : "#93000A",
  onErrorContainer: theme === "light" ? "#410002" : "#FFDAD6",
  background: theme === "light" ? "#FDF9EC" : "#14140C",
  onBackground: theme === "light" ? "#1C1C14" : "#E6E2D5",
  surface: theme === "light" ? "#FDF9EC" : "#14140C",
  onSurface: theme === "light" ? "#1C1C14" : "#E6E2D5",
  surfaceVariant: theme === "light" ? "#E6E3D1" : "#48473A",
  onSurfaceVariant: theme === "light" ? "#48473A" : "#CAC7B6",
  outline: theme === "light" ? "#797869" : "#939181",
  outlineVariant: theme === "light" ? "#CAC7B6" : "#48473A",
  shadow: theme === "light" ? "#000000" : "#FFFFFF",
  scrim: theme === "light" ? "#000000" : "#FFFFFF",
  inverseSurface: theme === "light" ? "#313128" : "#E6E2D5",
  inverseOnSurface: theme === "light" ? "#F4F1E3" : "#313128",
  inversePrimary: theme === "light" ? "#CCCB75" : "#626117",
  primaryFixed: theme === "light" ? "#E9E78F" : "#E9E78F",
  onPrimaryFixed: theme === "light" ? "#1D1D00" : "#1D1D00",
  primaryFixedDim: theme === "light" ? "#CCCB75" : "#CCCB75",
  onPrimaryFixedVariant: theme === "light" ? "#4A4900" : "#4A4900",
  secondaryFixed: theme === "light" ? "#E7E4BF" : "#CBC8A4",
  onSecondaryFixed: theme === "light" ? "#1D1D06" : "#E7E4BF",
  secondaryFixedDim: theme === "light" ? "#CBC8A4" : "#CBC8A4",
  onSecondaryFixedVariant: theme === "light" ? "#49482D" : "#49482D",
  tertiaryFixed: theme === "light" ? "#C0ECD8" : "#C0ECD8",
  onTertiaryFixed: theme === "light" ? "#002116" : "#002116",
  tertiaryFixedDim: theme === "light" ? "#A4D0BC" : "#A4D0BC",
  onTertiaryFixedVariant: theme === "light" ? "#254E3F" : "#254E3F",
  surfaceDim: theme === "light" ? "#DDDACD" : "#14140C",
  surfaceBright: theme === "light" ? "#FFFFFF" : "#3A3930",
  surfaceContainerLowest: theme === "light" ? "#FFFFFF" : "#0F0F07",
  surfaceContainerLow: theme === "light" ? "#F7F4E6" : "#1C1C14",
  surfaceContainer: theme === "light" ? "#F2EEE0" : "#202018",
  surfaceContainerHigh: theme === "light" ? "#ECE8DB" : "#2B2A22",
  surfaceContainerHighest: theme === "light" ? "#E6E2D5" : "#36352C",
});

export const Colors: ColorScheme = {
  ...getColorScheme("dark"),
};
