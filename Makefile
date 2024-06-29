include .env

# Define variables
APP_NAME = sshd911-homepage
PACKAGE_MANAGER = npm
DEV_CMD = run dev
BUILD_CMD = run build
CACHE_CLEAR_CMD = store prune
INSTALL_CMD = install
START_CMD = PORT=${PORT} pm2 start npm --name "${APP_NAME}" -- run start
STOP_CMD = pm2 stop ${APP_NAME} 
LOG_CMD = pm2 logs ${APP_NAME} 
STATUS_CMD = pm2 status
KILL_CMD = pm2 kill
RESTART_CMD = pm2 restart 0
INSTALL_MP2_CMD = sudo npm install pm2 -g
GIT_PULL_CMD = git pull origin main
UPDATE_NPM_PACKAGES_CMD= npx -p npm-check-updates -c "ncu"

# Default target
all: install

# Run development server
dev:
	$(PACKAGE_MANAGER) $(DEV_CMD)

# Build the project
build:
	$(PACKAGE_MANAGER) $(BUILD_CMD)

# Clear npm cache
clean:
	$(PACKAGE_MANAGER) $(CACHE_CLEAR_CMD)

# Start application
start:
	${START_CMD} || ${INSTALL_MP2_CMD}

# Stop application
stop:
	${STOP_CMD}

# Kill application
kill:
	${KILL_CMD}

# Restart application
restart:
	${RESTART_CMD}

# Dump logs
logs:
	${LOG_CMD}

# Status
status:
	${STATUS_CMD}

# Install dependencies
install:
	$(PACKAGE_MANAGER) $(INSTALL_CMD)

# update latest version
update:
	${KILL_CMD} && \
	${GIT_PULL_CMD} && \
	$(PACKAGE_MANAGER) $(INSTALL_CMD) && \
	${PACKAGE_MANAGER} ${BUILD_CMD} && \
	${START_CMD}

# update npm packages
update_npm:
	${UPDATE_NPM_PACKAGES_CMD}