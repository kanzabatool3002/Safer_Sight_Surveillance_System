# from flask import Flask, request, jsonify, send_from_directory
# import tempfile
# from flask_cors import CORS
# import os
# import cv2
# os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'
# os.environ['TF_CPP_MIN_LOG_LEVEL'] = '1' 
# import numpy as np
# from collections import deque
# from keras.models import load_model

# app = Flask(__name__)
# # CORS(app)  # Enable CORS for all routes
# CORS(app, supports_credentials=True) 


# # Load models
# LRCN_MODEL_PATH = 'LRCN_model___Date_Time_2024_08_10__10_38_06___Loss_0.6774061322212219___Accuracy_0.5476190447807312.keras'
# CONVLSTM_MODEL_PATH = 'convlstm_model___Date_Time_2024_08_10__10_30_24___Loss_0.6918425559997559___Accuracy_0.5.keras'
# LRCN_model = load_model(LRCN_MODEL_PATH)
# convlstm_model = load_model(CONVLSTM_MODEL_PATH)

# SEQUENCE_LENGTH = 20
# IMAGE_HEIGHT, IMAGE_WIDTH = 64, 64
# CLASSES_LIST = ["Normal", "Snatching"]

# # VIDEO_DIRECTORY = "D:/project/snatching/my-videos"  # Replace with the actual directory path
# VIDEO_DIRECTORY = "D:/project/Frontend/New folder-O/WebApp/backend/my-videos"  # Replace with the actual directory path

# def analyze_full_video_and_predict(video_file_path, output_file_path, SEQUENCE_LENGTH, frame_skip=2):
#     video_reader = cv2.VideoCapture(video_file_path)
#     # original_video_width = int(video_reader.get(cv2.CAP_PROP_FRAME_WIDTH))
#     # original_video_height = int(video_reader.get(cv2.CAP_PROP_FRAME_HEIGHT))
#     # video_writer = cv2.VideoWriter(output_file_path, cv2.VideoWriter_fourcc(*'mp4v'),
#     #                                video_reader.get(cv2.CAP_PROP_FPS), (original_video_width, original_video_height))

#     frames_queue = deque(maxlen=SEQUENCE_LENGTH)
#     all_predictions = []
#     frame_counter = 0

#     # First pass: Analyze the video and make predictions for all frames
#     while video_reader.isOpened():
#         ok, frame = video_reader.read()
#         if not ok:
#             break

#         frame_counter += 1
#         if frame_counter % frame_skip != 0:  # Skip frames based on frame_skip parameter
#             continue

#         resized_frame = cv2.resize(frame, (IMAGE_HEIGHT, IMAGE_WIDTH))
#         normalized_frame = resized_frame / 255.0
#         frames_queue.append(normalized_frame)

#         if len(frames_queue) == SEQUENCE_LENGTH:
#             predicted_labels_probabilities = LRCN_model.predict(np.expand_dims(frames_queue, axis=0))[0]
#             predicted_label = np.argmax(predicted_labels_probabilities)
#             predicted_class_name = CLASSES_LIST[predicted_label]
#             all_predictions.append(predicted_class_name)
#         # else:
#         #     all_predictions.append("")

#     video_reader.release()

#     if all_predictions:
#         overall_prediction = max(set(all_predictions), key=all_predictions.count)
#     else:
#         # overall_prediction = "Normal"
#         overall_prediction = "Unknown"

#     # video_reader = cv2.VideoCapture(video_file_path)
#     # while video_reader.isOpened():
#     #     ok, frame = video_reader.read()
#     #     if not ok:
#     #         break

#     #     cv2.putText(frame, overall_prediction, (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
#     #     video_writer.write(frame)

#     # video_reader.release()
#     # video_writer.release()

#     return overall_prediction

# @app.route('/videos', methods=['GET'])
# def get_videos():
#     videos = [f for f in os.listdir(VIDEO_DIRECTORY) if f.endswith('.mp4')]
#     return jsonify({"videos": videos})

# @app.route('/video/<filename>', methods=['GET'])
# def serve_video(filename):
#     return send_from_directory(VIDEO_DIRECTORY, filename)

# @app.route('/detect/<filename>', methods=['POST'])
# def detect_video(filename):
#     # Build the file path for the video file
#     video_file_path = os.path.join(VIDEO_DIRECTORY, filename)
    
#     if not os.path.isfile(video_file_path):
#         return jsonify({"error": "File not found"}), 404

#     # Output file path
#     output_file_path = f'{os.path.splitext(video_file_path)[0]}-Output-SeqLen{SEQUENCE_LENGTH}.mp4'

#     # Analyze and predict
#     overall_prediction = analyze_full_video_and_predict(video_file_path, output_file_path, SEQUENCE_LENGTH)

#     return jsonify({"prediction": overall_prediction, "output_video_path": output_file_path})

# # if __name__ == '__main__':
# #     app.run(debug=True)
# if __name__ == '__main__':
#     app.run(debug=True, port=5001)






















# # from flask import Flask, request, jsonify, send_from_directory
# # from flask_cors import CORS
# # import os
# # import cv2
# # import numpy as np
# # from collections import deque
# # from keras.models import load_model
# # from threading import Thread
# # from datetime import datetime

# # os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'
# # os.environ['TF_CPP_MIN_LOG_LEVEL'] = '1'

# # app = Flask(__name__)
# # CORS(app, supports_credentials=True)



# # app = Flask(__name__)
# # # CORS(app)  # Enable CORS for all routes
# # CORS(app, supports_credentials=True) 

# # # Load models
# # CONVLSTM_MODEL_PATH = 'improve_convlstm_model___Date_Time_2024_10_12__20_42_24___Loss_0.41087716817855835___Accuracy_0.8095238208770752.keras'
# # convlstm_model = load_model(CONVLSTM_MODEL_PATH)

# # # Parameters
# # SEQUENCE_LENGTH = 30
# # IMAGE_HEIGHT, IMAGE_WIDTH = 64, 64
# # CLASSES_LIST = ["normal", "fighting", "snatching"]
# # FPS = 20

# # # Initialize deque to store frames
# # frame_sequence = deque(maxlen=SEQUENCE_LENGTH)
# # recording = False  # Whether recording is ongoing
# # video_writer = None  # Video writer object
# # is_running = False  # Control variable for the webcam loop

# # # Webcam detection function
# # def webcam_detection():
# #     global recording, video_writer
# #     cap = cv2.VideoCapture(0)

# #     while is_running:
# #         ret, frame = cap.read()
# #         if not ret:
# #             print("Failed to capture image from webcam.")
# #             break

# #         # Resize frame to fit model's input size
# #         resized_frame = cv2.resize(frame, (IMAGE_WIDTH, IMAGE_HEIGHT))
# #         normalized_frame = resized_frame / 255.0
# #         frame_sequence.append(normalized_frame)

# #         if len(frame_sequence) == SEQUENCE_LENGTH:
# #             predicted_action = predict_action(list(frame_sequence))
# #             print(f"Predicted Action: {predicted_action}")

# #             cv2.putText(frame, f"Action: {predicted_action}", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

# #             # Start recording for specific actions
# #             if predicted_action in ["snatching", "fighting"]:
# #                 if not recording:
# #                     timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
# #                     video_filename = f"log_videos/{predicted_action}_{timestamp}.mp4"
# #                     fourcc = cv2.VideoWriter_fourcc(*'mp4v')
# #                     video_writer = cv2.VideoWriter(video_filename, fourcc, FPS, (frame.shape[1], frame.shape[0]))
# #                     recording = True
# #                     print(f"Started recording: {video_filename}")

# #                 if video_writer is not None:
# #                     video_writer.write(frame)
# #             else:
# #                 if recording:
# #                     video_writer.release()
# #                     video_writer = None
# #                     recording = False

# #         cv2.imshow("Real-time Action Detection", frame)
# #         if cv2.waitKey(1) & 0xFF == ord('q'):
# #             break

# #     cap.release()
# #     cv2.destroyAllWindows()

# # # Function to predict actions
# # def predict_action(sequence):
# #     sequence_array = np.expand_dims(sequence, axis=0)
# #     prediction = convlstm_model.predict(sequence_array)
# #     predicted_class = np.argmax(prediction[0])
# #     return CLASSES_LIST[predicted_class]

# # # Start webcam detection
# # @app.route('/start_webcam', methods=['POST'])
# # def start_webcam():
# #     global is_running
# #     if not is_running:
# #         is_running = True
# #         Thread(target=webcam_detection).start()  # Start the webcam detection in a separate thread
# #         return jsonify({"message": "Webcam detection started"}), 200
# #     return jsonify({"message": "Webcam detection is already running"}), 200

# # # # Stop webcam detection
# # # @app.route('/stop_webcam', methods=['POST'])
# # # def stop_webcam():
# # #     global is_running
# # #     is_running = False
# # #     if video_writer is not None:
# # #         video_writer.release()
# # #         video_writer = None
# # #     return jsonify({"message": "Webcam detection stopped"}), 200
# # # Stop webcam detection
# # @app.route('/stop_webcam', methods=['POST'])
# # def stop_webcam():
# #     global is_running, video_writer
# #     is_running = False
# #     if video_writer is not None:
# #         video_writer.release()
# #         video_writer = None
# #     return jsonify({"message": "Webcam detection stopped"}), 200


# # if __name__ == '__main__':
# #     app.run(debug=True, port=5001)  # Change port if needed




















# from flask import Flask, request, jsonify, send_from_directory
# from flask_cors import CORS
# import os
# import cv2
# import numpy as np
# from collections import deque
# from keras.models import load_model
# from threading import Thread
# from datetime import datetime



# # from flask import Flask, request, jsonify
# # from flask_cors import CORS
# import logging
# # from keras.models import load_model
# # from threading import Thread
# # import cv2
# # from datetime import datetime
# # import os

# # Set up logging
# logging.basicConfig(level=logging.DEBUG)

# os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'
# os.environ['TF_CPP_MIN_LOG_LEVEL'] = '1'

# app = Flask(__name__)
# # CORS(app, supports_credentials=True)
# CORS(app, supports_credentials=True, origins=["http://localhost:5173"])


# # Load models
# CONVLSTM_MODEL_PATH = 'improve_convlstm_model___Date_Time_2024_10_12__20_42_24___Loss_0.41087716817855835___Accuracy_0.8095238208770752.keras'
# convlstm_model = load_model(CONVLSTM_MODEL_PATH)

# # Parameters
# SEQUENCE_LENGTH = 20
# IMAGE_HEIGHT, IMAGE_WIDTH = 64, 64
# CLASSES_LIST = ["normal", "fighting", "snatching"]
# FPS = 20

# # Global variables
# is_running = False

# logging.basicConfig(level=logging.INFO)
# # Initialize deque to store frames
# frame_sequence = deque(maxlen=SEQUENCE_LENGTH)
# recording = False  # Whether recording is ongoing
# video_writer = None  # Video writer object
# is_running = False  # Control variable for the webcam loop

# # Webcam detection function
# # def webcam_detection():
# #     global recording, video_writer
# #     cap = cv2.VideoCapture(0)

# #     if not cap.isOpened():
# #         print("Failed to open webcam.")
# #         return  # Exit if the webcam cannot be opened

# #     while is_running:
# #         ret, frame = cap.read()
# #         if not ret:
# #             print("Failed to capture image from webcam.")
# #             break
# def webcam_detection():
#     global is_running
#     cap = cv2.VideoCapture(0)
#     logging.debug("Webcam detection started")
    
#     while is_running:
#         ret, frame = cap.read()
#         if not ret:
#             logging.error("Failed to capture image from webcam.")
#             break

#         # Resize frame to fit model's input size
#         resized_frame = cv2.resize(frame, (IMAGE_WIDTH, IMAGE_HEIGHT))
#         normalized_frame = resized_frame / 255.0
#         frame_sequence.append(normalized_frame)

#         if len(frame_sequence) == SEQUENCE_LENGTH:
#             predicted_action = predict_action(list(frame_sequence))
#             print(f"Predicted Action: {predicted_action}")

#             cv2.putText(frame, f"Action: {predicted_action}", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

#             # Start recording for specific actions
#             if predicted_action in ["snatching", "fighting"]:
#                 if not recording:
#                     timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
#                     video_filename = f"log_videos/{predicted_action}_{timestamp}.mp4"
#                     fourcc = cv2.VideoWriter_fourcc(*'mp4v')
#                     video_writer = cv2.VideoWriter(video_filename, fourcc, FPS, (frame.shape[1], frame.shape[0]))
#                     recording = True
#                     print(f"Started recording: {video_filename}")

#                 if video_writer is not None:
#                     video_writer.write(frame)
#             else:
#                 if recording:
#                     video_writer.release()
#                     video_writer = None
#                     recording = False

#         cv2.imshow("Real-time Action Detection", frame)
#         if cv2.waitKey(1) & 0xFF == ord('q'):
#             break

#     cap.release()
#     cv2.destroyAllWindows()

# # Function to predict actions
# def predict_action(sequence):
#     sequence_array = np.expand_dims(sequence, axis=0)
#     prediction = convlstm_model.predict(sequence_array)
#     predicted_class = np.argmax(prediction[0])
#     return CLASSES_LIST[predicted_class]

# # # Start webcam detection
# # @app.route('/start_webcam', methods=['POST'])
# # def start_webcam():
# #     global is_running
# #     if not is_running:
# #         is_running = True
# #         Thread(target=webcam_detection).start()  # Start the webcam detection in a separate thread
# #         return jsonify({"message": "Webcam detection started"}), 200
# #     return jsonify({"message": "Webcam detection is already running"}), 200

# # # Stop webcam detection
# # @app.route('/stop_webcam', methods=['POST'])
# # def stop_webcam():
# #     global is_running, video_writer
# #     is_running = False
# #     if video_writer is not None:
# #         video_writer.release()
# #         video_writer = None
# #     return jsonify({"message": "Webcam detection stopped"}), 200

# # if __name__ == '__main__':
# #     app.run(debug=True, port=5001)  # Change port if needed


# # # Start webcam detection
# # @app.route('/start_webcam', methods=['POST'])
# # def start_webcam():
# #     global is_running
# #     logging.debug("Received request to start webcam detection.")
    
# #     if not is_running:
# #         is_running = True
# #         logging.info("Starting webcam detection.")
# #         Thread(target=webcam_detection).start()
# #         return jsonify({"message": "Webcam detection started"}), 200
    
# #     logging.warning("Webcam detection is already running.")
# #     return jsonify({"message": "Webcam detection is already running"}), 200

# # # Stop webcam detection
# # @app.route('/stop_webcam', methods=['POST'])
# # def stop_webcam():
# #     global is_running
# #     is_running = False
# #     logging.info("Stopping webcam detection.")
# #     return jsonify({"message": "Webcam detection stopped"}), 200






# @app.route('/start_webcam', methods=['POST'])
# def start_webcam():
#     app.logger.info('Received request to start webcam detection')
#     try:
#         # Logic to start webcam detection here
#         # This is where you would integrate with your webcam processing logic
#         return jsonify({"message": "Webcam detection started successfully."}), 200
#     except Exception as e:
#         app.logger.error(f"Error starting webcam detection: {str(e)}")
#         return jsonify({"message": f"Error starting webcam detection: {str(e)}"}), 500

# @app.route('/stop_webcam', methods=['POST'])
# def stop_webcam():
#     app.logger.info('Received request to stop webcam detection')
#     try:
#         # Logic to stop webcam detection here
#         # Ensure to release resources or stop processing
#         return jsonify({"message": "Webcam detection stopped successfully."}), 200
#     except Exception as e:
#         app.logger.error(f"Error stopping webcam detection: {str(e)}")
#         return jsonify({"message": f"Error stopping webcam detection: {str(e)}"}), 500

# if __name__ == '__main__':
#     app.run(debug=True, port=5001)



























# from flask import Flask, request, jsonify, send_from_directory
# from flask_cors import CORS
# import os
# import cv2
# import numpy as np
# from collections import deque
# from keras.models import load_model
# from threading import Thread
# from datetime import datetime
# import logging

# # Set up logging
# logging.basicConfig(level=logging.DEBUG)

# os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'
# os.environ['TF_CPP_MIN_LOG_LEVEL'] = '1'

# app = Flask(__name__)
# # CORS(app, supports_credentials=True)
# CORS(app, supports_credentials=True, origins=["http://localhost:5173"])


# # Load models
# CONVLSTM_MODEL_PATH = 'improve_convlstm_model___Date_Time_2024_10_12__20_42_24___Loss_0.41087716817855835___Accuracy_0.8095238208770752.keras'
# model = load_model(CONVLSTM_MODEL_PATH)

# # Parameters
# SEQUENCE_LENGTH = 20
# IMAGE_HEIGHT, IMAGE_WIDTH = 64, 64
# CLASSES_LIST = ["normal", "fighting", "snatching"]
# FPS = 20

# # Global variables
# is_running = False

# logging.basicConfig(level=logging.INFO)
# # Initialize deque to store frames
# frame_sequence = deque(maxlen=SEQUENCE_LENGTH)
# # recording = False  # Whether recording is ongoing
# # video_writer = None  # Video writer object
# is_running = False  # Control variable for the webcam loop

# # def webcam_detection():
# #     global is_running
# #     cap = cv2.VideoCapture(0)
# #     logging.debug("Webcam detection started")
    
# #     while is_running:
# #         ret, frame = cap.read()
# #         if not ret:
# #             logging.error("Failed to capture image from webcam.")
# #             break

# #         # Resize frame to fit model's input size
# #         resized_frame = cv2.resize(frame, (IMAGE_WIDTH, IMAGE_HEIGHT))
# #         normalized_frame = resized_frame / 255.0
# #         frame_sequence.append(normalized_frame)

# #         if len(frame_sequence) == SEQUENCE_LENGTH:
# #             predicted_action = predict_action(list(frame_sequence))
# #             print(f"Predicted Action: {predicted_action}")

# #             cv2.putText(frame, f"Action: {predicted_action}", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

# #             # Start recording for specific actions
# #             if predicted_action in ["snatching", "fighting"]:
# #                 if not recording:
# #                     timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
# #                     video_filename = f"log_videos/{predicted_action}_{timestamp}.mp4"
# #                     fourcc = cv2.VideoWriter_fourcc(*'mp4v')
# #                     video_writer = cv2.VideoWriter(video_filename, fourcc, FPS, (frame.shape[1], frame.shape[0]))
# #                     recording = True
# #                     print(f"Started recording: {video_filename}")

# #                 if video_writer is not None:
# #                     video_writer.write(frame)
# #             else:
# #                 if recording:
# #                     video_writer.release()
# #                     video_writer = None
# #                     recording = False

# #         cv2.imshow("Real-time Action Detection", frame)
# #         if cv2.waitKey(1) & 0xFF == ord('q'):
# #             break

# #     cap.release()
# #     cv2.destroyAllWindows()

# # # Function to predict actions
# # def predict_action(sequence):
# #     sequence_array = np.expand_dims(sequence, axis=0)
# #     prediction = convlstm_model.predict(sequence_array)
# #     predicted_class = np.argmax(prediction[0])
# #     return CLASSES_LIST[predicted_class]






# def predict_action(sequence):
#     # Preprocess sequence before passing it to the model
#     sequence_array = np.expand_dims(sequence, axis=0)  # Shape (1, sequence_length, height, width, channels)
    
#     # Make prediction
#     prediction = model.predict(sequence_array)
#     predicted_class = np.argmax(prediction[0])
#     return CLASSES_LIST[predicted_class]

# # Initialize variables for video logging
# recording = False  # Whether recording is ongoing
# video_writer = None  # Video writer object
# start_time = None  # Start time of the recording


# try:
#     while True:
#         ret, frame = cap.read()

#         if not ret:
#             print("Failed to capture image from webcam. Exiting...")
#             break

#         # Resize frame to fit model's input size
#         resized_frame = cv2.resize(frame, (IMAGE_WIDTH, IMAGE_HEIGHT))

#         # Normalize frame
#         normalized_frame = resized_frame / 255.0

#         # Add the frame to the deque
#         frame_sequence.append(normalized_frame)

#         # If we have enough frames (sequence length), make a prediction
#         if len(frame_sequence) == SEQUENCE_LENGTH:
#             # Convert deque to a list and predict the action
#             predicted_action = predict_action(list(frame_sequence))
#             print(f"Predicted Action: {predicted_action}")

#             # Display predicted action on the frame
#             cv2.putText(frame, f"Action: {predicted_action}", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2, cv2.LINE_AA)

#             # If the predicted action is "snatching" or "fighting", start recording
#             if predicted_action in ["snatching", "fighting"]:
#                 if not recording:
#                     # Get current date and time for video filename
#                     timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
#                     video_filename = f"{log_folder}/{predicted_action}_{timestamp}.mp4"
                    
#                     # Define the codec and create VideoWriter object
#                     fourcc = cv2.VideoWriter_fourcc(*'mp4v')  # Codec for mp4 format
#                     video_writer = cv2.VideoWriter(video_filename, fourcc, FPS, (frame.shape[1], frame.shape[0]))
#                     start_time = datetime.now()
#                     recording = True
#                     print(f"Started recording: {video_filename}")

#                 # Write the current frame to the video file
#                 if video_writer is not None:
#                     video_writer.write(frame)
#             else:
#                 # Stop recording when no action is detected
#                 if recording:
#                     end_time = datetime.now()
#                     duration = (end_time - start_time).total_seconds()
#                     print(f"Recording stopped. Duration: {duration:.2f} seconds")
                    
#                     # Release the video writer
#                     video_writer.release()
#                     video_writer = None
#                     recording = False










# @app.route('/start_webcam', methods=['POST'])
# def start_webcam():
#     app.logger.info('Received request to start webcam detection')
#     try:
#         # Logic to start webcam detection here
#         # This is where you would integrate with your webcam processing logic
#         return jsonify({"message": "Webcam detection started successfully."}), 200
#     except Exception as e:
#         app.logger.error(f"Error starting webcam detection: {str(e)}")
#         return jsonify({"message": f"Error starting webcam detection: {str(e)}"}), 500

# @app.route('/stop_webcam', methods=['POST'])
# def stop_webcam():
#     app.logger.info('Received request to stop webcam detection')
#     try:
#         # Logic to stop webcam detection here
#         # Ensure to release resources or stop processing
#         return jsonify({"message": "Webcam detection stopped successfully."}), 200
#     except Exception as e:
#         app.logger.error(f"Error stopping webcam detection: {str(e)}")
#         return jsonify({"message": f"Error stopping webcam detection: {str(e)}"}), 500

# if __name__ == '__main__':
#     app.run(debug=True, port=5001)


















# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import os
# import cv2
# import numpy as np
# from collections import deque
# from keras.models import load_model
# from threading import Thread
# from datetime import datetime
# import logging

# # Set up logging
# logging.basicConfig(level=logging.DEBUG)

# os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'
# os.environ['TF_CPP_MIN_LOG_LEVEL'] = '1'

# app = Flask(__name__)
# CORS(app, supports_credentials=True, origins=["http://localhost:5173"])

# # Load models
# CONVLSTM_MODEL_PATH = 'improve_convlstm_model___Date_Time_2024_10_12__20_42_24___Loss_0.41087716817855835___Accuracy_0.8095238208770752.keras'
# model = load_model(CONVLSTM_MODEL_PATH)

# # Parameters
# SEQUENCE_LENGTH = 20
# IMAGE_HEIGHT, IMAGE_WIDTH = 64, 64
# CLASSES_LIST = ["normal", "fighting", "snatching"]
# FPS = 20

# # Global variables
# is_running = False

# # Initialize deque to store frames
# frame_sequence = deque(maxlen=SEQUENCE_LENGTH)

# # Webcam capture variable
# cap = None  # This will be initialized when starting the webcam
# recording = False  # Whether recording is ongoing
# video_writer = None  # Video writer object
# start_time = None  # Start time of the recording


# def predict_action(sequence):
#     sequence_array = np.expand_dims(sequence, axis=0)  # Shape (1, sequence_length, height, width, channels)
#     prediction = model.predict(sequence_array)
#     predicted_class = np.argmax(prediction[0])
#     return CLASSES_LIST[predicted_class]


# def process_webcam():
#     global recording, video_writer, start_time, cap, is_running

#     try:
#         cap = cv2.VideoCapture(0)  # Open webcam
#         if not cap.isOpened():
#             raise Exception("Could not open webcam")

#         log_folder = "./logs"  # Folder to save recorded videos
#         if not os.path.exists(log_folder):
#             os.makedirs(log_folder)

#         while is_running:
#             ret, frame = cap.read()

#             if not ret:
#                 print("Failed to capture image from webcam. Exiting...")
#                 break

#             # Resize and normalize frame
#             resized_frame = cv2.resize(frame, (IMAGE_WIDTH, IMAGE_HEIGHT))
#             normalized_frame = resized_frame / 255.0
#             frame_sequence.append(normalized_frame)

#             # If enough frames are collected, make a prediction
#             if len(frame_sequence) == SEQUENCE_LENGTH:
#                 predicted_action = predict_action(list(frame_sequence))
#                 print(f"Predicted Action: {predicted_action}")

#                 # Display prediction on frame
#                 cv2.putText(frame, f"Action: {predicted_action}", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2, cv2.LINE_AA)

#                 # Start recording if necessary
#                 if predicted_action in ["snatching", "fighting"]:
#                     if not recording:
#                         timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
#                         video_filename = f"{log_folder}/{predicted_action}_{timestamp}.mp4"
#                         fourcc = cv2.VideoWriter_fourcc(*'mp4v')  # Codec for mp4 format
#                         video_writer = cv2.VideoWriter(video_filename, fourcc, FPS, (frame.shape[1], frame.shape[0]))
#                         start_time = datetime.now()
#                         recording = True
#                         print(f"Started recording: {video_filename}")

#                     if video_writer is not None:
#                         video_writer.write(frame)
#                 else:
#                     # Stop recording if no action is detected
#                     if recording:
#                         end_time = datetime.now()
#                         duration = (end_time - start_time).total_seconds()
#                         print(f"Recording stopped. Duration: {duration:.2f} seconds")
#                         video_writer.release()
#                         video_writer = None
#                         recording = False

#             # Display the frame
#             cv2.imshow("Webcam Action Detection", frame)

#             if cv2.waitKey(1) & 0xFF == ord('q'):
#                 break

#     except Exception as e:
#         print(f"Error occurred during webcam processing: {str(e)}")
#     finally:
#         if cap is not None:
#             cap.release()
#         if video_writer is not None:
#             video_writer.release()
#         cv2.destroyAllWindows()


# @app.route('/start_webcam', methods=['POST'])
# def start_webcam():
#     global is_running
#     app.logger.info('Received request to start webcam detection')
#     try:
#         if not is_running:
#             is_running = True
#             webcam_thread = Thread(target=process_webcam)
#             webcam_thread.start()
#         return jsonify({"message": "Webcam detection started successfully."}), 200
#     except Exception as e:
#         app.logger.error(f"Error starting webcam detection: {str(e)}")
#         return jsonify({"message": f"Error starting webcam detection: {str(e)}"}), 500


# @app.route('/stop_webcam', methods=['POST'])
# def stop_webcam():
#     global is_running
#     app.logger.info('Received request to stop webcam detection')
#     try:
#         if is_running:
#             is_running = False
#         return jsonify({"message": "Webcam detection stopped successfully."}), 200
#     except Exception as e:
#         app.logger.error(f"Error stopping webcam detection: {str(e)}")
#         return jsonify({"message": f"Error stopping webcam detection: {str(e)}"}), 500


# if __name__ == '__main__':
#     app.run(debug=True, port=5001)























# from flask import Flask, request, jsonify
# import cv2
# import numpy as np
# from tensorflow.keras.models import load_model
# from collections import deque
# from datetime import datetime
# import os
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app, supports_credentials=True, origins=["http://localhost:5173"])

# # Load your pre-trained model
# model = load_model('improve_convlstm_model___Date_Time_2024_10_12__20_42_24___Loss_0.41087716817855835___Accuracy_0.8095238208770752.keras')

# # Parameters
# SEQUENCE_LENGTH = 30
# IMAGE_HEIGHT, IMAGE_WIDTH = 64, 64
# CLASSES_LIST = ["normal", "fighting", "snatching"]
# FPS = 20

# # Initialize deque to store frames
# frame_sequence = deque(maxlen=SEQUENCE_LENGTH)

# # Create log folder if it doesn't exist
# log_folder = 'log_videos'
# if not os.path.exists(log_folder):
#     os.makedirs(log_folder)

# recording = False
# video_writer = None

# def predict_action(sequence):
#     sequence_array = np.expand_dims(sequence, axis=0)
#     prediction = model.predict(sequence_array)
#     predicted_class = np.argmax(prediction[0])
#     return CLASSES_LIST[predicted_class]

# @app.route('/predict', methods=['POST'])
# def predict():
#     global recording, video_writer
#     try:
#         # Get the frame from the request
#         frame_data = request.files['frame'].read()
#         nparr = np.frombuffer(frame_data, np.uint8)
#         frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

#         # Resize and normalize frame
#         resized_frame = cv2.resize(frame, (IMAGE_WIDTH, IMAGE_HEIGHT))
#         normalized_frame = resized_frame / 255.0

#         # Append the normalized frame to the sequence
#         frame_sequence.append(normalized_frame)

#         if len(frame_sequence) == SEQUENCE_LENGTH:
#             predicted_action = predict_action(list(frame_sequence))

#             # Print the prediction to the terminal for debugging
#             print(f"Predicted Action: {predicted_action}")

#             # Start recording if snatching or fighting is detected
#             if predicted_action in ["snatching", "fighting"] and not recording:
#                 timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
#                 video_filename = f"{log_folder}/{predicted_action}_{timestamp}.mp4"
#                 fourcc = cv2.VideoWriter_fourcc(*'mp4v')
#                 video_writer = cv2.VideoWriter(video_filename, fourcc, FPS, (frame.shape[1], frame.shape[0]))
#                 recording = True

#             # Continue writing to the video file if recording is active
#             if recording:
#                 video_writer.write(frame)

#             # Stop recording if the action changes back to "normal"
#             if predicted_action == "normal" and recording:
#                 video_writer.release()
#                 video_writer = None
#                 recording = False

#             return jsonify({"prediction": predicted_action})

#         return jsonify({"prediction": "Not enough frames"})
#     except Exception as e:
#         print(f"Error during prediction: {e}")
#         return jsonify({"error": str(e)}), 500

# if __name__ == '__main__':
#     app.run(port=5001)






# # CURRECT



# from flask import Flask, request, jsonify
# import cv2
# import winsound
# import numpy as np
# import threading
# from tensorflow.keras.models import load_model
# from collections import deque
# from datetime import datetime
# import os
# from flask_cors import CORS
# import pygame  # Import pygame for playing mp3 files

# app = Flask(__name__)
# CORS(app, supports_credentials=True, origins=["http://localhost:5173"])

# # Load your pre-trained model
# model = load_model('improve_convlstm_model___Date_Time_2024_10_12__20_42_24___Loss_0.41087716817855835___Accuracy_0.8095238208770752.keras')


# # Define the path to the custom sound file (a .wav file)
# SOUND_FILE_PATH = 'alarm.mp3'  # Replace with the actual path to your .wav file

# # Parameters
# SEQUENCE_LENGTH = 30
# IMAGE_HEIGHT, IMAGE_WIDTH = 64, 64
# CLASSES_LIST = ["normal", "fighting", "snatching"]
# FPS = 20

# # Initialize deque to store frames
# frame_sequence = deque(maxlen=SEQUENCE_LENGTH)

# # Create log folder if it doesn't exist
# log_folder = 'log_videos'
# if not os.path.exists(log_folder):
#     os.makedirs(log_folder)

# recording = False
# video_writer = None
# current_action = "normal"  # Track the current action state
# sound_playing = False  # Track if sound is currently playing

# # Initialize pygame mixer for playing sound
# pygame.mixer.init()

# def sound_alarm_start():
#     global sound_playing
#     if not sound_playing:
#         sound_playing = True
#         threading.Thread(target=play_sound).start()

# def play_sound():
#     pygame.mixer.music.load(SOUND_FILE_PATH)
#     pygame.mixer.music.play(-1)  # Play in a loop

# # Stop the alarm sound
# def sound_alarm_stop():
#     global sound_playing
#     if sound_playing:
#         pygame.mixer.music.stop()
#         sound_playing = False

# # def sound_alarm_start():
# #     global sound_playing
# #     if not sound_playing:
# #         sound_playing = True
# #         threading.Thread(target=play_sound).start()

# # def play_sound():
# #     winsound.PlaySound('SystemAsterisk', winsound.SND_ALIAS | winsound.SND_LOOP | winsound.SND_ASYNC)

# # # Stop the alarm sound
# # def sound_alarm_stop():
# #     global sound_playing
# #     if sound_playing:
# #         # Stop the sound
# #         winsound.PlaySound(None, winsound.SND_PURGE)
# #         sound_playing = False
# # Play alarm sound continuously when recording starts
# # def sound_alarm_start():
# #     global sound_playing
# #     if not sound_playing:
# #         # Play the beep sound continuously
# #         winsound.PlaySound('ringout', winsound.SND_ALIAS | winsound.SND_LOOP | winsound.SND_ASYNC)
# #         sound_playing = True

# # # Stop the alarm sound
# # def sound_alarm_stop():
# #     global sound_playing
# #     if sound_playing:
# #         # Stop the sound
# #         winsound.PlaySound(None, winsound.SND_PURGE)
# #         sound_playing = False



# def predict_action(sequence):
#     sequence_array = np.expand_dims(sequence, axis=0)
#     prediction = model.predict(sequence_array)
#     predicted_class = np.argmax(prediction[0])
#     return CLASSES_LIST[predicted_class]

# @app.route('/stop-alarm', methods=['POST'])
# def stop_alarm():
#     try:
#         # Stop the alarm sound
#         sound_alarm_stop()
#         return jsonify({"message": "Alarm stopped"}), 200
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500




# # @app.route('/predict', methods=['POST'])
# # def predict():
# #     # global recording, video_writer
# #     # try:
# #     #     if 'frame' not in request.files:
# #     #         print("Error: No frame provided in request.")
# #     #         return jsonify({"error": "No frame provided"}), 400

# #     #     frame_data = request.files['frame'].read()
# #     #     if not frame_data:
# #     #         print("Error: Frame data is empty.")
# #     #         return jsonify({"error": "Empty frame data"}), 400

# #     #     nparr = np.frombuffer(frame_data, np.uint8)
# #     #     frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

# #     #     if frame is None:
# #     #         print("Error: Invalid frame data received.")
# #     #         return jsonify({"error": "Invalid frame data"}), 400
        
# #     global recording, video_writer
# #     try:
# #         # Check if the frame is in the request
# #         if 'frame' not in request.files:
# #             return jsonify({"error": "No frame provided"}), 400

# #         # Get the frame from the request
# #         frame_data = request.files['frame'].read()
# #         nparr = np.frombuffer(frame_data, np.uint8)
# #         frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

# #         if frame is None:
# #             return jsonify({"error": "Invalid frame data"}), 400

# #         # Resize and normalize frame
# #         resized_frame = cv2.resize(frame, (IMAGE_WIDTH, IMAGE_HEIGHT))
# #         normalized_frame = resized_frame / 255.0

# #         # Append the normalized frame to the sequence
# #         frame_sequence.append(normalized_frame)

# #         if len(frame_sequence) == SEQUENCE_LENGTH:
# #             predicted_action = predict_action(list(frame_sequence))
# #             print(f"Predicted Action: {predicted_action}")

# #             # Start recording if snatching or fighting is detected
# #             if predicted_action in ["snatching", "fighting"] and not recording:
# #                 timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
# #                 video_filename = f"{log_folder}/{predicted_action}_{timestamp}.mp4"
# #                 fourcc = cv2.VideoWriter_fourcc(*'mp4v')
# #                 video_writer = cv2.VideoWriter(video_filename, fourcc, FPS, (frame.shape[1], frame.shape[0]))
# #                 recording = True

# #             # Continue writing to the video file if recording is active
# #             if recording:
# #                 video_writer.write(frame)

# #             # Stop recording if the action changes back to "normal"
# #             if predicted_action == "normal" and recording:
# #                 video_writer.release()
# #                 video_writer = None
# #                 recording = False
# #                 print("Recording stopped.")

# #             return jsonify({"prediction": predicted_action})

# #         return jsonify({"prediction": "Not enough frames"}), 400

# #     except Exception as e:
# #         print(f"Error during prediction: {e}")
# #         return jsonify({"error": str(e)}), 500

# # @app.route('/predict', methods=['POST'])
# # def predict():
# #     global recording, video_writer
# #     try:
# #         # Check if the frame is in the request
# #         if 'frame' not in request.files:
# #             return jsonify({"error": "No frame provided"}), 400

# #         # Get the frame from the request
# #         frame_data = request.files['frame'].read()
# #         nparr = np.frombuffer(frame_data, np.uint8)
# #         frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

# #         if frame is None:
# #             return jsonify({"error": "Invalid frame data"}), 400

# #         # Resize and normalize frame
# #         resized_frame = cv2.resize(frame, (IMAGE_WIDTH, IMAGE_HEIGHT))
# #         normalized_frame = resized_frame / 255.0

# #         # Append the normalized frame to the sequence
# #         frame_sequence.append(normalized_frame)

# #         if len(frame_sequence) == SEQUENCE_LENGTH:
# #             predicted_action = predict_action(list(frame_sequence))
# #             print(f"Predicted Action: {predicted_action}")

# #             # Logic to handle recording...
            
# #             # Start recording if snatching or fighting is detected
# #             if predicted_action in ["snatching", "fighting"] and not recording:
# #                 # sound_alarm_start()
# #                 timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
# #                 video_filename = f"{log_folder}/{predicted_action}_{timestamp}.mp4"
# #                 fourcc = cv2.VideoWriter_fourcc(*'mp4v')
# #                 video_writer = cv2.VideoWriter(video_filename, fourcc, FPS, (frame.shape[1], frame.shape[0]))
# #                 recording = True

# #             # Continue writing to the video file if recording is active
# #             if recording:
# #                 video_writer.write(frame)

# #             # Stop recording if the action changes back to "normal"
# #             if predicted_action == "normal" and recording:
# #                 predicted_action = predict_action(None)
# #                 video_writer.release()
# #                 video_writer = None
# #                 recording = False
# #                 current_action = "normal"
# #                 print(f"Predicted Action: {predicted_action}")
# #             # Stop the alarm sound when normal action is detected
# #                 # sound_alarm_stop()


            
# #             return jsonify({"prediction": predicted_action})

# #         return jsonify({"prediction": "Not enough frames"})
# #     except Exception as e:
# #         print(f"Error during prediction: {e}")
# #         return jsonify({"error": str(e)}), 500

# #  currect but giving error
# # Predicted Action: normal
# # [mp4 @ 0000029682098100] Application provided duration: -9223372036854728272 / timestamp: 47616 is out of range for mov/mp4 format
# # Error during prediction: Failed to convert a NumPy array to a Tensor (Unsupported object type NoneType).
# # 127.0.0.1 - - [02/Nov/2024 15:51:29] "POST /predict HTTP/1.1" 500 -
# # 1/1 ━━━━━━━━━━━━━━━━━━━━ 1s 1s/step



# # @app.route('/predict', methods=['POST'])
# # def predict():
# #     global recording, video_writer
# #     try:
# # # Check if the frame is in the request
# #         if 'frame' not in request.files:
# #             return jsonify({"error": "No frame provided"}), 400
# #         # Get the frame from the request
# #         frame_data = request.files['frame'].read()
# #         nparr = np.frombuffer(frame_data, np.uint8)
# #         frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

# #         if frame is None:
# #             return jsonify({"error": "Invalid frame data"}), 400

# #         # Resize and normalize frame
# #         resized_frame = cv2.resize(frame, (IMAGE_WIDTH, IMAGE_HEIGHT))
# #         normalized_frame = resized_frame / 255.0

# #         # Append the normalized frame to the sequence
# #         frame_sequence.append(normalized_frame)

# #         if len(frame_sequence) == SEQUENCE_LENGTH:
# #             predicted_action = predict_action(list(frame_sequence))

# #             # Print the prediction to the terminal for debugging
# #             print(f"Predicted Action: {predicted_action}")

# #             # Start recording if snatching or fighting is detected
# #             if predicted_action in ["snatching", "fighting"] and not recording:
# #                 # sound_alarm_start()
# #                 timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
# #                 video_filename = f"{log_folder}/{predicted_action}_{timestamp}.mp4"
# #                 fourcc = cv2.VideoWriter_fourcc(*'mp4v')
# #                 video_writer = cv2.VideoWriter(video_filename, fourcc, FPS, (frame.shape[1], frame.shape[0]))
# #                 recording = True

# #             # Continue writing to the video file if recording is active
# #             if recording:
# #                 video_writer.write(frame)

# #             # Stop recording if the action changes back to "normal"
# #             if predicted_action == "normal" and recording:
# #                 predicted_action = predict_action(None)
# #                 video_writer.release()
# #                 video_writer = None
# #                 recording = False
# #                 current_action = "normal"
# #                 print(f"Predicted Action: {predicted_action}")
# #             # Stop the alarm sound when normal action is detected
# #                 # sound_alarm_stop()


# #             return jsonify({"prediction": predicted_action})

# #         return jsonify({"prediction": "Not enough frames"})
# #     except Exception as e:
# #         print(f"Error during prediction: {e}")
# #         return jsonify({"error": str(e)}), 500







# # @app.route('/predict', methods=['POST'])
# # def predict():
# #     global recording, video_writer
# #     try:
# #         # Get the frame from the request
# #         frame_data = request.files['frame'].read()
# #         nparr = np.frombuffer(frame_data, np.uint8)
# #         frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

# #         # Resize and normalize frame
# #         resized_frame = cv2.resize(frame, (IMAGE_WIDTH, IMAGE_HEIGHT))
# #         normalized_frame = resized_frame / 255.0

# #         # Append the normalized frame to the sequence
# #         frame_sequence.append(normalized_frame)

# #         if len(frame_sequence) == SEQUENCE_LENGTH:
# #             predicted_action = predict_action(list(frame_sequence))

# #             # Print the prediction to the terminal for debugging
# #             print(f"Predicted Action: {predicted_action}")

# #             # Start recording if snatching or fighting is detected
# #             if predicted_action in ["snatching", "fighting"] and not recording:
# #                 # sound_alarm_start()
# #                 timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
# #                 video_filename = f"{log_folder}/{predicted_action}_{timestamp}.mp4"
# #                 fourcc = cv2.VideoWriter_fourcc(*'mp4v')
# #                 video_writer = cv2.VideoWriter(video_filename, fourcc, FPS, (frame.shape[1], frame.shape[0]))
# #                 recording = True

# #             # Continue writing to the video file if recording is active
# #             if recording:
# #                 video_writer.write(frame)

# #             # Stop recording if the action changes back to "normal"
# #             if predicted_action == "normal" and recording:
# #                 predicted_action = predict_action(None)
# #                 video_writer.release()
# #                 video_writer = None
# #                 recording = False
# #                 current_action = "normal"
# #                 print(f"Predicted Action: {predicted_action}")
# #             # Stop the alarm sound when normal action is detected
# #                 # sound_alarm_stop()


# #             return jsonify({"prediction": predicted_action})

# #         return jsonify({"prediction": "Not enough frames"})
# #     except Exception as e:
# #         print(f"Error during prediction: {e}")
# #         return jsonify({"error": str(e)}), 500










# @app.route('/predict', methods=['POST'])
# def predict():
#     global recording, video_writer, frame_sequence  # Make sure frame_sequence is global
#     try:
#         frame_data = request.files['frame'].read()
#         if not frame_data:
#             return jsonify({"error": "No frame data received"}), 400
        
#         nparr = np.frombuffer(frame_data, np.uint8)
#         frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
#         if frame is None:
#             return jsonify({"error": "Failed to decode frame"}), 400

#         # Resize and normalize frame
#         resized_frame = cv2.resize(frame, (IMAGE_WIDTH, IMAGE_HEIGHT))
#         normalized_frame = resized_frame / 255.0
#         frame_sequence.append(normalized_frame)

#         if len(frame_sequence) == SEQUENCE_LENGTH:
#             predicted_action = predict_action(list(frame_sequence))

#             print(f"Predicted Action: {predicted_action}")

#             if predicted_action in ["snatching", "fighting"] and not recording:
#                 timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
#                 video_filename = f"{log_folder}/{predicted_action}_{timestamp}.mp4"
#                 fourcc = cv2.VideoWriter_fourcc(*'mp4v')
#                 video_writer = cv2.VideoWriter(video_filename, fourcc, FPS, (frame.shape[1], frame.shape[0]))
#                 recording = True

#             if recording:
#                 video_writer.write(frame)

#             if predicted_action == "normal" and recording:
#                 video_writer.release()
#                 video_writer = None
#                 recording = False
#                 print(f"Recording stopped, current action: {predicted_action}")

#             return jsonify({"prediction": predicted_action})

#         return jsonify({"prediction": "Not enough frames"})
#     except Exception as e:
#         print(f"Error during prediction: {e}")
#         return jsonify({"error": str(e)}), 500







# if __name__ == '__main__':
#     app.run(port=5001)

















# from flask import Flask, request, jsonify
# import cv2
# import numpy as np
# import threading
# from tensorflow.keras.models import load_model
# from collections import deque
# from datetime import datetime
# import os
# from flask_cors import CORS
# import pygame  # Import pygame for playing mp3 files

# app = Flask(__name__)
# CORS(app, supports_credentials=True, origins=["http://localhost:5173"])

# # Load your pre-trained model
# model = load_model('improve_convlstm_model___Date_Time_2024_10_12__20_42_24___Loss_0.41087716817855835___Accuracy_0.8095238208770752.keras')

# # Define the path to the custom sound file (a .mp3 file)
# SOUND_FILE_PATH = 'alarm.mp3'  # Replace with the actual path to your .mp3 file

# # Parameters
# SEQUENCE_LENGTH = 30
# IMAGE_HEIGHT, IMAGE_WIDTH = 64, 64
# CLASSES_LIST = ["normal", "fighting", "snatching"]
# FPS = 20

# # Initialize deque to store frames
# frame_sequence = deque(maxlen=SEQUENCE_LENGTH)

# # Create log folder if it doesn't exist
# log_folder = 'log_videos'
# if not os.path.exists(log_folder):
#     os.makedirs(log_folder)

# recording = False
# video_writer = None
# current_action = "normal"  # Track the current action state
# sound_playing = False  # Track if sound is currently playing

# # Initialize pygame mixer for playing sound
# pygame.mixer.init()

# def sound_alarm_start():
#     global sound_playing
#     if not sound_playing:
#         sound_playing = True
#         threading.Thread(target=play_sound).start()

# def play_sound():
#     pygame.mixer.music.load(SOUND_FILE_PATH)
#     pygame.mixer.music.play(-1)  # Play in a loop

# # Stop the alarm sound
# def sound_alarm_stop():
#     global sound_playing
#     if sound_playing:
#         pygame.mixer.music.stop()
#         sound_playing = False

# def predict_action(sequence):
#     sequence_array = np.expand_dims(sequence, axis=0)
#     prediction = model.predict(sequence_array)
#     predicted_class = np.argmax(prediction[0])
#     return CLASSES_LIST[predicted_class]

# @app.route('/stop-alarm', methods=['POST'])
# def stop_alarm():
#     try:
#         sound_alarm_stop()
#         return jsonify({"message": "Alarm stopped"}), 200
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# @app.route('/predict', methods=['POST'])
# def predict():
#     global recording, video_writer
#     try:
#         frame_data = request.files['frame'].read()
#         nparr = np.frombuffer(frame_data, np.uint8)
#         frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

#         resized_frame = cv2.resize(frame, (IMAGE_WIDTH, IMAGE_HEIGHT))
#         normalized_frame = resized_frame / 255.0

#         frame_sequence.append(normalized_frame)

#         if len(frame_sequence) == SEQUENCE_LENGTH:
#             predicted_action = predict_action(list(frame_sequence))
#             print(f"Predicted Action: {predicted_action}")

#             if predicted_action in ["snatching", "fighting"] and not recording:
#                 sound_alarm_start()
#                 timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
#                 video_filename = f"{log_folder}/{predicted_action}_{timestamp}.mp4"
#                 fourcc = cv2.VideoWriter_fourcc(*'mp4v')
#                 video_writer = cv2.VideoWriter(video_filename, fourcc, FPS, (frame.shape[1], frame.shape[0]))
#                 recording = True

#             if recording:
#                 video_writer.write(frame)

#             if predicted_action == "normal" and recording:
#                 video_writer.release()
#                 video_writer = None
#                 recording = False
#                 sound_alarm_stop()

#             return jsonify({"prediction": predicted_action})

#         return jsonify({"prediction": "Not enough frames"})
#     except Exception as e:
#         print(f"Error during prediction: {e}")
#         return jsonify({"error": str(e)}), 500

# if __name__ == '__main__':
#     app.run(port=5001)




















# original



from flask import Flask, request, jsonify, send_from_directory
import tempfile
# from flask_cors import CORS
import os
# import cv2
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '1' 
# import numpy as np
# from collections import deque
# from keras.models import load_model



from flask import Flask, request, jsonify
import cv2
import winsound
import numpy as np
import threading
from tensorflow.keras.models import load_model
from collections import deque
from datetime import datetime
import os
from flask_cors import CORS
import pygame  # Import pygame for playing mp3 files

app = Flask(__name__)
CORS(app, supports_credentials=True, origins=["http://localhost:5173"])

# Load your pre-trained model
model = load_model('improve_convlstm_model___Date_Time_2024_10_12__20_42_24___Loss_0.41087716817855835___Accuracy_0.8095238208770752.keras')
VIDEO_DIRECTORY = "D:/project/Frontend/New folder-O/WebApp/backend/my-videos"  # Replace with the actual directory path


# Define the path to the custom sound file (a .wav file)
SOUND_FILE_PATH = 'alarm.mp3'  # Replace with the actual path to your .wav file

# Parameters
SEQUENCE_LENGTH = 30
IMAGE_HEIGHT, IMAGE_WIDTH = 64, 64
CLASSES_LIST = ["normal", "fighting", "snatching"]
FPS = 20

# Initialize deque to store frames
frame_sequence = deque(maxlen=SEQUENCE_LENGTH)

# Create log folder if it doesn't exist
log_folder = 'log_videos'
if not os.path.exists(log_folder):
    os.makedirs(log_folder)

recording = False
video_writer = None
current_action = "normal"  # Track the current action state
sound_playing = False  # Track if sound is currently playing

# Initialize pygame mixer for playing sound
pygame.mixer.init()

def sound_alarm_start():
    global sound_playing
    if not sound_playing:
        sound_playing = True
        threading.Thread(target=play_sound).start()

def play_sound():
    pygame.mixer.music.load(SOUND_FILE_PATH)
    pygame.mixer.music.play(-1)  # Play in a loop

# Stop the alarm sound
def sound_alarm_stop():
    global sound_playing
    if sound_playing:
        pygame.mixer.music.stop()
        sound_playing = False

def predict_action(sequence):
    sequence_array = np.expand_dims(sequence, axis=0)
    prediction = model.predict(sequence_array)
    predicted_class = np.argmax(prediction[0])
    return CLASSES_LIST[predicted_class]


@app.route('/videos', methods=['GET'])
def get_videos():
    videos = [f for f in os.listdir(VIDEO_DIRECTORY) if f.endswith('.mp4')]
    return jsonify({"videos": videos})

@app.route('/video/<filename>', methods=['GET'])
def serve_video(filename):
    return send_from_directory(VIDEO_DIRECTORY, filename)


@app.route('/stop-alarm', methods=['POST'])
def stop_alarm():
    try:
        # Stop the alarm sound
        sound_alarm_stop()
        return jsonify({"message": "Alarm stopped"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/predict', methods=['POST'])
def predict():
    global recording, video_writer, frame_sequence  # Make sure frame_sequence is global
    try:
        frame_data = request.files['frame'].read()
        if not frame_data:
            return jsonify({"error": "No frame data received"}), 400
        
        nparr = np.frombuffer(frame_data, np.uint8)
        frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
        if frame is None:
            return jsonify({"error": "Failed to decode frame"}), 400

        # Resize and normalize frame
        resized_frame = cv2.resize(frame, (IMAGE_WIDTH, IMAGE_HEIGHT))
        normalized_frame = resized_frame / 255.0
        frame_sequence.append(normalized_frame)

        if len(frame_sequence) == SEQUENCE_LENGTH:
            predicted_action = predict_action(list(frame_sequence))

            print(f"Predicted Action: {predicted_action}")

            if predicted_action in ["snatching", "fighting"] and not recording:
                timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
                video_filename = f"{log_folder}/{predicted_action}_{timestamp}.mp4"
                fourcc = cv2.VideoWriter_fourcc(*'mp4v')
                video_writer = cv2.VideoWriter(video_filename, fourcc, FPS, (frame.shape[1], frame.shape[0]))
                recording = True

            if recording:
                video_writer.write(frame)

            if predicted_action == "normal" and recording:
                video_writer.release()
                video_writer = None
                recording = False
                print(f"Recording stopped, current action: {predicted_action}")

            return jsonify({"prediction": predicted_action})

        return jsonify({"prediction": "Not enough frames"})
    except Exception as e:
        print(f"Error during prediction: {e}")
        return jsonify({"error": str(e)}), 500







if __name__ == '__main__':
    app.run(port=5001)





