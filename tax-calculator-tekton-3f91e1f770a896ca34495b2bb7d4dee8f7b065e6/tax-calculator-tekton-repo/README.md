# Tax Calculator — Tekton Pipeline Repository

A small static tax-calculator application plus Tekton resources for installing dependencies, running Jasmine tests, and building a container image.

## Repository contents

- `tasks.yaml` — the `npminstall` and `jasmine` Tekton Task definitions.
- `build-task.yaml` — the `build-image` Task used by the pipeline.
- `pipeline.yaml` — runs `npminstall`, `tests`, then `build`.
- `run.yaml` — example PipelineRun with parameter and workspace configuration.
- `Dockerfile` — packages the static app into an Nginx image.
- `tests/` — seven Jasmine unit tests.

## Run locally

```bash
npm install
npx jasmine
docker build -t tax-calculator:1.0.0 .
docker run --rm -p 8080:80 tax-calculator:1.0.0
```

Open <http://localhost:8080>.

## Tekton deployment notes

1. Create a workspace PVC and update `YOUR_SOURCE_WORKSPACE_PVC` in `run.yaml`.
2. Update the image parameter in `run.yaml` to your IBM Cloud Container Registry namespace and region.
3. Make sure the workspace contains this repository's source files before starting the PipelineRun.
4. Apply the tasks and pipeline in the cluster:

```bash
kubectl apply -f tasks.yaml
kubectl apply -f build-task.yaml
kubectl apply -f pipeline.yaml
kubectl apply -f run.yaml
```

5. For pushing to IBM Cloud Container Registry, configure registry authentication for the Tekton service account and extend the build task to push the image. The included build task builds the image but does not push it. Buildah also requires the cluster/runtime to permit the configured privileged build step.

## Publish to GitHub

Create a **public** repository named `tax-calculator-tekton`, then from this folder run:

```bash
git init
git add .
git commit -m "Add tax calculator and Tekton pipeline"
git branch -M main
git remote add origin https://github.com/inzamamali/tax-calculator-tekton.git
git push -u origin main
```

After pushing, the file URLs will be:

- `https://github.com/inzamamali/tax-calculator-tekton/blob/main/tasks.yaml`
- `https://github.com/inzamamali/tax-calculator-tekton/blob/main/pipeline.yaml`
- `https://github.com/inzamamali/tax-calculator-tekton/blob/main/run.yaml`

These are expected URL formats only; they become live public links after you create the repository and push the files.
