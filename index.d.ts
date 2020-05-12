declare module 'react-native-perspective-image-cropper' {
  import { Component } from 'react';
  import {
    PanResponderGestureState,
    ImageURISource,
  } from 'react-native';

  export interface Coordinate {
    x: number,
    y: number,
  }

  export interface RectangleCoordinates {
    bottomLeft: Coordinate,
    bottomRight: Coordinate,
    topLeft: Coordinate,
    topRight: Coordinate,
  }

  export interface CustomCropProps {
    updateImage: (croppedPicture: string, coordinate: RectangleCoordinates)	=> void
    rectangleCoordinates: RectangleCoordinates
    initialImage: string
    height: number
    width: number
    overlayColor: string
    overlayStrokeColor: string
    handlerColor: string
    enablePanStrict: boolean
  }

  class CustomCrop extends Component<CustomCropProps> {
    /**
     * Crop
     */
    crop: () => void;
  }

  export default CustomCrop;
}
