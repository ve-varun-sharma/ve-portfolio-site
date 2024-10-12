# This code is compatible with Terraform 4.25.0 and versions that are backwards compatible to 4.25.0.
# For information about validating this Terraform code, see https://developer.hashicorp.com/terraform/tutorials/gcp-get-started/google-cloud-platform-build#format-and-validate-the-configuration


terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "4.51.0"
    }
  }
}

provider "google" {
  project = var.project
  region  = var.region
  zone    = var.zone
}

resource "google_compute_firewall" "allow_http" {
  name        = "allow-http-to-ve-portfolio-site-app"
  description = "Allow HTTP traffic to ve-portfolio-site-app instance"

  network = "projects/experimentation-learning/global/networks/default"

  allow {
    protocol = "tcp"
    ports    = ["8080", "443"]
  }

  source_ranges = ["0.0.0.0/0"] # Allow from anywhere (be cautious)
}




resource "google_compute_instance" "ve-portfolio-site-app" {
  boot_disk {
    auto_delete = true
    device_name = "ve-portfolio-site-app"

    initialize_params {
      image = "projects/cos-cloud/global/images/cos-stable-117-18613-0-76"
      size  = 10
      type  = "pd-balanced"
    }

    mode = "READ_WRITE"
  }

  can_ip_forward      = false
  deletion_protection = false
  enable_display      = false

  labels = {
    container-vm = "cos-stable-117-18613-0-76"
    goog-ec-src  = "vm_add-tf"
    app-type     = "personal"
  }

  machine_type = "e2-small"

  metadata = {
    gce-container-declaration = "spec:\n  containers:\n  - name: ve-portfolio-site-app\n    image: gcr.io/experimentation-learning/ve-app:latest\n    env:\n    - name: NODE_ENV\n      value: production\n    - name: NEXT_PUBLIC_POSTHOG_KEY\n      value: phc_818omoB8aykp5LAkoF62pOAF6LZhE0VCXPaRhhDNTJk\n    - name: NEXT_PUBLIC_POSTHOG_HOST\n      value: https://us.i.posthog.com\n  - name: PORT\n      value: \"${var.port}\"\n   stdin: false\n    tty: false\n  restartPolicy: Always\n# This container declaration format is not public API and may change without notice. Please\n# use gcloud command-line tool or Google Cloud Console to run Containers on Google Compute Engine."
  }

  name = "ve-portfolio-site-app"

  network_interface {
    access_config {
      network_tier = "PREMIUM"
    }

    queue_count = 0
    stack_type  = "IPV4_ONLY"
    subnetwork  = "projects/experimentation-learning/regions/us-central1/subnetworks/default"
  }

  scheduling {
    automatic_restart   = false
    on_host_maintenance = "TERMINATE"
    preemptible         = true
    provisioning_model  = "SPOT"
  }

  service_account {
    email  = "1072357316796-compute@developer.gserviceaccount.com"
    scopes = ["https://www.googleapis.com/auth/devstorage.read_only", "https://www.googleapis.com/auth/logging.write", "https://www.googleapis.com/auth/monitoring.write", "https://www.googleapis.com/auth/service.management.readonly", "https://www.googleapis.com/auth/servicecontrol", "https://www.googleapis.com/auth/trace.append"]
  }

  shielded_instance_config {
    enable_integrity_monitoring = true
    enable_secure_boot          = false
    enable_vtpm                 = true
  }

  tags = ["https-server", "http-server"]
  zone = var.zone
}

