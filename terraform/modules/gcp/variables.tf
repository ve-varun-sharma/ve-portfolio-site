variable "project" {
  type    = string
  default = "experimentation-learning"
}

variable "region" {
  type    = string
  default = "us-central1"
}

variable "zone" {
  type        = string
  default     = "us-central1-c"
  description = "The Google Cloud zone where the instance will be created"
}

variable "port" {
  type        = string
  default     = "8080"
  description = "The port on which the application will listen"
}
